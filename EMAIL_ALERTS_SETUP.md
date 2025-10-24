# 📧 Email Alerts Setup for LLM-Directory

## Current Status

✅ **Email alerts are ENABLED and ready to use**
- Subject: `LLM-Directory Refreshed`
- Recipient: `rishijajee@gmail.com`
- Trigger: Every time the app is opened or refreshed

⚠️ **Requires Resend API key to send emails**

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Resend API Key (FREE)

1. Go to **https://resend.com**
2. Sign up for a free account (no credit card required)
3. Verify your email
4. Go to **API Keys** in the dashboard
5. Click **Create API Key**
6. Copy the key (starts with `re_...`)

**Free tier includes:**
- ✅ 100 emails per day
- ✅ 3,000 emails per month
- ✅ Perfect for tracking visits!

---

### Step 2: Add API Key to Vercel

1. Go to your Vercel dashboard: **https://vercel.com**
2. Select your **LLM-Directory** project
3. Click **Settings** → **Environment Variables**
4. Add new variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_YourApiKeyHere` (paste your key)
   - **Environments:** Check all (Production, Preview, Development)
5. Click **Save**

---

### Step 3: Deploy to Activate

After adding the environment variable:

```bash
# From your local project directory
git push origin main
```

Or use the Vercel dashboard:
- Go to **Deployments** tab
- Click **Redeploy** on the latest deployment

**That's it!** You'll now receive an email every time someone opens or refreshes your app.

---

## 📧 What the Email Looks Like

**Subject:** `LLM-Directory Refreshed`

**Content:**
```
🔄 LLM Directory Refreshed

Time: 2024-10-23 21:30:45
IP Address: 123.456.789.0
User Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)...
Referrer: Direct

This notification was sent automatically from your LLM Directory app.
```

---

## ⚙️ Configuration Options

### Change Email Recipient

Edit `api/notify-visit.js` line 76:
```javascript
to: ['your-email@example.com'],  // Change this
```

### Disable Email Alerts

Option 1 - Keep code but don't send emails:
- Remove `RESEND_API_KEY` from Vercel environment variables

Option 2 - Disable tracking entirely:
Edit `src/App.jsx` line 11:
```javascript
useVisitTracker(false);  // Change true to false
```

### Reduce Email Frequency

See `EMAIL_SETUP.md` for examples of:
- Once per session
- Once per day
- Hourly summaries

---

## 🧪 Testing

### Test Locally (Without Emails)

The app will work locally but won't send emails (requires Vercel serverless functions).

You'll see in the browser console:
```
Visit tracked (email disabled - no API key)
```

### Test on Vercel (With Emails)

1. Deploy to Vercel with API key configured
2. Visit your deployed app
3. Check `rishijajee@gmail.com` inbox
4. You should receive an email within seconds!

---

## 🔍 Troubleshooting

### No emails received

**Check Vercel Function Logs:**
1. Go to Vercel dashboard → Your project
2. Click **Functions** tab
3. Find `/api/notify-visit`
4. Check logs for errors

**Common issues:**
- ❌ API key not set → Add `RESEND_API_KEY` to environment variables
- ❌ Invalid API key → Regenerate key in Resend dashboard
- ❌ Sender email not verified → Use `onboarding@resend.dev` (works without verification)
- ❌ Redeploy needed → Redeploy after adding env variables

### Too many emails

If you're getting flooded with emails:

**Quick fix:**
```javascript
// In src/App.jsx
useVisitTracker(false);  // Temporarily disable
```

**Better fix - Rate limiting:**
See `EMAIL_SETUP.md` for session-based or time-based limiting examples.

---

## 💡 Pro Tips

1. **Use Vercel Analytics instead** - Built-in, free, no email spam
2. **Spam folder** - Check spam if emails not appearing
3. **Verify domain** - For better deliverability, verify your domain in Resend
4. **Monitor quota** - Check Resend dashboard to track email usage

---

## 📚 Resources

- **Resend Docs:** https://resend.com/docs
- **Vercel Functions:** https://vercel.com/docs/functions
- **Vercel Env Variables:** https://vercel.com/docs/projects/environment-variables

---

## 🎯 Current Setup Summary

| Setting | Value |
|---------|-------|
| **Status** | ✅ Enabled |
| **Subject** | LLM-Directory Refreshed |
| **Recipient** | rishijajee@gmail.com |
| **Frequency** | Every page load/refresh |
| **Service** | Resend (free tier) |
| **API Endpoint** | `/api/notify-visit` |

**Next step:** Add `RESEND_API_KEY` to Vercel environment variables and redeploy!

---

🤖 **Generated with [Claude Code](https://claude.com/claude-code)**
