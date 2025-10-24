# 🔧 Troubleshooting Guide

## Quick Diagnostic Checklist

### ❌ "Architecture View Details column is missing"

**Cause:** Column might be toggled off OR old deployment

**Fixes:**
1. **Check if column is enabled:**
   - Look for "Columns:" section above the table
   - Find the "architecture" button
   - Make sure it's highlighted/active (purple background)
   - If it's gray, click it to enable

2. **Hard refresh browser:**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
   - This clears cached JavaScript/CSS

3. **Verify latest deployment:**
   - Go to Vercel dashboard
   - Check deployment timestamp
   - Should match your latest git push time
   - If old, click "Redeploy"

4. **Check browser console for errors:**
   - Press `F12` to open DevTools
   - Go to "Console" tab
   - Look for red error messages
   - Take screenshot and share if errors exist

---

### ❌ "Search not working"

**What "not working" might mean:**

**Issue 1: Search box doesn't filter results**
- Type in search box
- Local results should filter immediately
- Check browser console (`F12`) for JavaScript errors

**Issue 2: No web results appearing**
- Web search needs 2+ characters
- Wait 500ms after typing (debounced)
- Results merge into same table with 🌐 badge
- Check if you see "(including X from web)" in results count

**Issue 3: JavaScript error**
- Press `F12` → Console tab
- Look for errors related to `webSearchService` or `searchWeb`
- Clear browser cache: `Ctrl/Cmd + Shift + R`

**Fixes:**
1. Hard refresh browser (Ctrl+Shift+R)
2. Check browser console for errors
3. Try typing a simple query like "GPT"
4. Look for models with 🌐 Web badge
5. Check if results counter says "including X from web"

---

### ❌ "Email alerts not working"

**Most common cause:** RESEND_API_KEY not added to Vercel

**Step-by-step fix:**

**1. Verify you added the API key:**
```
Vercel Dashboard → Your Project → Settings → Environment Variables
```
Look for: `RESEND_API_KEY`

If missing:
- Get key from https://resend.com (free signup)
- Add as environment variable
- Select all environments (Production, Preview, Development)
- Click Save

**2. Redeploy after adding key:**
- Vercel Dashboard → Deployments tab
- Click "Redeploy" on latest deployment
- OR push a new commit to trigger deployment

**3. Test the API endpoint:**

Visit in browser (replace with your domain):
```
https://your-app.vercel.app/api/notify-visit
```

Should see JSON response (not an error page)

**4. Check Vercel Function Logs:**
```
Vercel Dashboard → Functions tab → /api/notify-visit
```
Click on function execution to see logs

**Expected logs:**
- ✅ WITH API KEY: "Visit tracked and email sent"
- ⚠️ WITHOUT API KEY: "Visit tracked (email disabled - no API key)"
- ❌ ERROR: Red error messages

**5. Check email spam folder:**
- Look in spam/junk folder
- Search for "LLM-Directory Refreshed"
- Add sender to contacts if found

**6. Verify in Resend Dashboard:**
```
https://resend.com → Emails tab
```
Should see sent emails (if API key is configured correctly)

---

## Common Issues

### Issue: "Everything worked before, now it's broken"

**Cause:** Browser caching old version

**Fix:**
```bash
# Clear ALL browser cache for your site
1. Press F12 (DevTools)
2. Right-click the refresh button (while DevTools open)
3. Select "Empty Cache and Hard Reload"

OR

# Incognito/Private window
- Open site in incognito mode
- No cache = fresh version
```

---

### Issue: "Columns keep disappearing"

**Cause:** Column visibility toggles persist in browser state

**Fix:**
1. Find "Columns:" section above table
2. Check which toggle buttons are active (purple) vs inactive (gray)
3. Click inactive ones to show hidden columns
4. Architecture column toggle is labeled "architecture"

---

### Issue: "Web search returns nothing"

**Reasons:**
1. **Query too short** - Need 2+ characters
2. **No matching results** - Try: "GPT", "Claude", "Llama", "Mistral"
3. **JavaScript error** - Check console (F12)

**Curated search works without API:**
- 12+ built-in LLM resources
- Searches: GPT-4, Claude, Gemini, Llama, Mistral, etc.
- Returns results even without Google API

---

### Issue: "Architecture modal doesn't open"

**Symptoms:**
- Click "View Details" button
- Nothing happens

**Fixes:**
1. Check browser console for JavaScript errors
2. Hard refresh (Ctrl+Shift+R)
3. Make sure you're clicking "View Details" not "Visit Site →"
   - "View Details" = local models (shows diagram)
   - "Visit Site →" = web results (external link)

---

### Issue: "Table looks broken/messy"

**Cause:** CSS not loaded or cached

**Fix:**
1. Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. Clear browser cache completely
3. Check if Vercel deployed CSS files (check deployments log)

---

## Deployment Checklist

When you push changes and they don't appear:

✅ **1. Committed and pushed to GitHub:**
```bash
git status          # Should say "nothing to commit"
git push origin main
```

✅ **2. Vercel auto-deployment triggered:**
- Check Vercel dashboard → Deployments
- Should see new deployment in progress or completed
- Wait for "Ready" status

✅ **3. Clear browser cache:**
```
Ctrl/Cmd + Shift + R
```

✅ **4. Check deployment URL:**
- Make sure you're visiting the production URL
- Not a preview URL from old deployment

---

## Environment Variables Needed

| Variable | Required For | Where to Get |
|----------|--------------|--------------|
| `RESEND_API_KEY` | Email alerts | https://resend.com |
| `VITE_GOOGLE_SEARCH_API_KEY` | Real-time web search (optional) | Google Custom Search API |
| `VITE_GOOGLE_SEARCH_ENGINE_ID` | Real-time web search (optional) | Google Custom Search |

**Note:** Email alerts need `RESEND_API_KEY`. Web search works with curated fallback even without Google API.

---

## How to Get Detailed Error Info

### Browser Console:
```
1. Press F12
2. Go to "Console" tab
3. Refresh page
4. Look for red errors
5. Take screenshot
```

### Network Tab (for API issues):
```
1. Press F12
2. Go to "Network" tab
3. Refresh page
4. Look for failed requests (red)
5. Click on failed request
6. Check "Response" tab for error details
```

### Vercel Function Logs:
```
1. Vercel Dashboard
2. Your Project → Functions
3. Click on /api/notify-visit
4. View execution logs
5. Look for errors or console.log output
```

---

## Still Not Working?

**Collect this info:**

1. **Browser console screenshot** (F12 → Console tab)
2. **What you see** vs **what you expect**
3. **Steps you took** to deploy
4. **Vercel deployment status** (screenshot from dashboard)
5. **Environment variables** you added (DON'T share the actual keys, just confirm they exist)

**Quick test:**
1. Open browser console (F12)
2. Type a search query
3. See if any errors appear in console
4. Check if the architecture column toggle exists
5. Confirm you're on the latest deployment URL

---

## Feature Verification Checklist

After deploying, verify each feature works:

- [ ] ✅ Search box filters local results
- [ ] ✅ Web results appear with 🌐 badge (after typing 2+ chars)
- [ ] ✅ Architecture column visible
- [ ] ✅ "View Details" button opens modal with diagram
- [ ] ✅ Expandable rows work (click ▶ button)
- [ ] ✅ Column toggles show/hide columns
- [ ] ✅ Sorting works (click column headers)
- [ ] ✅ Email sent to rishijajee@gmail.com (if RESEND_API_KEY added)

---

🤖 **Generated with [Claude Code](https://claude.com/claude-code)**
