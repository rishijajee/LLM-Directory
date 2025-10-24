# 🔍 Google Custom Search Setup Guide

## Enable Unlimited Web Search for ANY LLM

With Google Custom Search API, your app can search the **entire web** for any LLM - not limited to the curated list.

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Google Custom Search API Key

1. Go to **Google Cloud Console**: https://console.cloud.google.com/

2. **Create a new project** (or use existing):
   - Click "Select a project" → "New Project"
   - Name: `LLM-Directory-Search`
   - Click "Create"

3. **Enable Custom Search API**:
   - Go to: https://console.cloud.google.com/apis/library/customsearch.googleapis.com
   - Click **"Enable"**
   - Wait 30 seconds for activation

4. **Create API Key**:
   - Go to: https://console.cloud.google.com/apis/credentials
   - Click **"Create Credentials"** → **"API Key"**
   - Copy the API key (starts with `AIza...`)
   - **IMPORTANT**: Click "Restrict Key" and select "Custom Search API" only (for security)
   - Save

---

### Step 2: Create Custom Search Engine

1. Go to **Programmable Search Engine**: https://programmablesearchengine.google.com/

2. Click **"Add"** or **"Get Started"**

3. **Configure your search engine**:
   - **Sites to search**: Select **"Search the entire web"**
   - **Name**: `LLM Search Engine`
   - Click **"Create"**

4. **Get Search Engine ID**:
   - Click on your newly created search engine
   - Go to **"Setup"** → **"Basic"**
   - Find **"Search engine ID"** (looks like: `a1234567890abcdef`)
   - Copy this ID

---

### Step 3: Add to Vercel Environment Variables

1. Go to **Vercel Dashboard**: https://vercel.com/dashboard

2. Select your **LLM-Directory** project

3. Go to **Settings** → **Environment Variables**

4. Add **TWO** new variables:

   **Variable 1:**
   - **Key:** `VITE_GOOGLE_SEARCH_API_KEY`
   - **Value:** Your API key from Step 1 (e.g., `AIzaSyC...`)
   - **Environments:** Check all (Production, Preview, Development)

   **Variable 2:**
   - **Key:** `VITE_GOOGLE_SEARCH_ENGINE_ID`
   - **Value:** Your Search Engine ID from Step 2 (e.g., `a1234567890abcdef`)
   - **Environments:** Check all (Production, Preview, Development)

5. Click **"Save"** for both

---

### Step 4: Redeploy

After adding environment variables, redeploy your app:

**Option A - Push to GitHub:**
```bash
git push origin main
```

**Option B - Manual Redeploy:**
1. Vercel Dashboard → **Deployments** tab
2. Click **"..."** menu on latest deployment
3. Click **"Redeploy"**
4. Wait for "Ready" status

---

## 🎉 That's It!

**Web search will now:**
- ✅ Search the entire web using Google
- ✅ Find ANY LLM, even brand new ones
- ✅ Return real-time results
- ✅ No longer limited to curated list

**Test it:**
1. Deploy and wait for "Ready"
2. Search for ANY LLM name (e.g., "Inflection Pi", "Cohere Embed", "Amazon Titan")
3. See real web results with 🌐 badge!

---

## 📊 Free Tier Limits

**Google Custom Search API Free Tier:**
- ✅ **100 searches per day** (FREE)
- ✅ Perfect for most websites
- ⚠️ If you exceed 100/day, searches will use curated fallback list

**To increase limit:**
- Enable billing in Google Cloud Console
- Still very cheap: $5 per 1,000 searches after free tier

---

## 🧪 Testing Locally (Optional)

To test before deploying to Vercel:

1. Create `.env` file in project root:
```env
VITE_GOOGLE_SEARCH_API_KEY=AIzaSyC...your-key...
VITE_GOOGLE_SEARCH_ENGINE_ID=a1234567890abcdef
```

2. Restart dev server:
```bash
npm run dev
```

3. Test search in browser

**IMPORTANT:** Don't commit `.env` file to GitHub (it's in `.gitignore`)

---

## 🔒 Security Best Practices

1. **Restrict API Key** (in Google Cloud Console):
   - Go to API Credentials
   - Edit your API key
   - Select "Restrict key" → "Custom Search API" only
   - Add "HTTP referrers" restriction with your domain: `*.vercel.app/*`

2. **Monitor Usage**:
   - Check Google Cloud Console → APIs & Services → Dashboard
   - See daily search count
   - Set up billing alerts if needed

3. **Never commit API keys**:
   - Keys should ONLY be in Vercel environment variables
   - Never in code or `.env` files pushed to GitHub

---

## 🔧 Troubleshooting

### "No web results" even with API key

**Check:**
1. Environment variables are named **exactly**: `VITE_GOOGLE_SEARCH_API_KEY` and `VITE_GOOGLE_SEARCH_ENGINE_ID`
2. Both variables are set for all environments
3. You redeployed AFTER adding variables
4. Check Vercel function logs for errors

### "API key not valid"

**Fix:**
1. Verify API key is correct
2. Make sure Custom Search API is enabled in Google Cloud
3. Check API key restrictions (should allow Custom Search API)
4. Try creating a new API key

### "Search engine ID invalid"

**Fix:**
1. Verify you copied the correct ID from Programmable Search Engine
2. Make sure search engine is set to "Search the entire web"
3. Try creating a new search engine

---

## 📚 Resources

- **Google Custom Search API**: https://developers.google.com/custom-search/v1/overview
- **Programmable Search Engine**: https://programmablesearchengine.google.com/
- **Google Cloud Console**: https://console.cloud.google.com/
- **Pricing**: https://developers.google.com/custom-search/v1/overview#pricing

---

## ✅ Current Status

**Your web search code is ALREADY configured to use Google API!**

The code checks for these environment variables:
- If present → Uses Google Custom Search (unlimited)
- If missing → Uses curated fallback list (18 LLMs)

Just add the API keys and redeploy - no code changes needed!

---

🤖 **Generated with [Claude Code](https://claude.com/claude-code)**
