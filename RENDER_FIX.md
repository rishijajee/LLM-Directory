# 🔧 Quick Fix: Render Deployment Error

## Error Message
```
Cannot find module '/opt/render/project/src/server.js'
```

## Problem
You created a **Web Service** instead of a **Static Site** on Render.

## Solution (2 Minutes)

### Step 1: Delete Current Service
1. Go to https://dashboard.render.com/
2. Click on your failing service
3. Click "Settings" (left sidebar, bottom)
4. Scroll down → Click "Delete Service"
5. Type the service name to confirm
6. Click "Delete"

### Step 2: Create Static Site
1. Click "New +" button (top right)
2. Select **"Static Site"** ⚠️ NOT "Web Service"
3. Connect your GitHub repository: `LLM-Directory`
4. Click "Connect"

### Step 3: Configure (Auto or Manual)

#### Option A: Auto-Configuration (Recommended)
Render will detect `render.yaml` and configure automatically. Just click **"Create Static Site"**.

#### Option B: Manual Configuration
If auto-detection doesn't work:

| Setting | Value |
|---------|-------|
| **Name** | `llm-directory` |
| **Branch** | `main` |
| **Build Command** | `npm ci && npm run build` |
| **Publish Directory** | `dist` |

Click **"Create Static Site"**

### Step 4: Wait for Build
- Build takes 2-5 minutes
- Watch the "Events" tab for progress
- Your site will be live at: `https://llm-directory.onrender.com` (or your chosen name)

## ✅ Verification

Once deployed, you should see:
- ✅ Build status: "Live"
- ✅ Green checkmark next to your service
- ✅ No errors in the logs
- ✅ Your site accessible via the Render URL

## Why This Happens

| Service Type | What it does | Needs |
|--------------|--------------|-------|
| **Web Service** | Runs a Node.js server | `server.js` file |
| **Static Site** | Serves pre-built files | `dist/` folder |

Your app is a React static site (uses Vite), so it needs **Static Site** deployment.

## Still Having Issues?

### Check These:

1. **Correct Service Type?**
   - Dashboard should say "Static Site" not "Web Service"

2. **Build Command Correct?**
   - Should be: `npm ci && npm run build`
   - NOT: `npm start` or `node server.js`

3. **Publish Directory Correct?**
   - Should be: `dist`
   - NOT: `build` or `public`

4. **Branch Name?**
   - Make sure you pushed to the correct branch
   - Default is usually `main` or `master`

### View Build Logs

1. Go to your service dashboard
2. Click "Events" tab
3. Click on the failed build
4. Review the output for specific errors

## Alternative: Use Vercel Instead

If you continue having issues with Render, Vercel is easier for Vite apps:

```bash
npm i -g vercel
vercel --prod
```

Or connect your repo at: https://vercel.com/new

---

**Need more help?** Check [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md) for detailed instructions.
