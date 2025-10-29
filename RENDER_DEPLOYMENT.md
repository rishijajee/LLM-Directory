# LLM Directory - Render Deployment Guide

Complete guide for deploying the LLM Directory application to Render.

## What is Render?

Render is a modern cloud platform that makes it easy to deploy and scale web applications, static sites, databases, and more. It offers:

- Free static site hosting with custom domains
- Automatic deployments from GitHub
- Built-in SSL certificates
- Global CDN for fast content delivery
- Pull request previews
- Zero configuration for many frameworks

## Prerequisites

Before deploying to Render, make sure you have:

1. A [Render account](https://render.com/) (free tier available)
2. Your code pushed to a GitHub repository
3. The `render.yaml` configuration file in your project root (✅ already included)

## Deployment Methods

### Method 1: Blueprint Deployment (Recommended)

The easiest way to deploy using the included `render.yaml` configuration.

#### Step-by-Step Instructions:

1. **Sign in to Render**
   - Go to https://dashboard.render.com/
   - Sign in with your GitHub account

2. **Create New Blueprint**
   - Click the "New +" button in the top right
   - Select "Blueprint"

3. **Connect Repository**
   - Select "Connect a repository"
   - Choose your GitHub account
   - Find and select the `LLM-Directory` repository
   - Click "Connect"

4. **Review Configuration**
   - Render will automatically detect the `render.yaml` file
   - Review the service configuration:
     - **Service Name**: llm-directory
     - **Environment**: Static Site
     - **Build Command**: `npm install && npm run build`
     - **Publish Directory**: `./dist`

5. **Deploy**
   - Click "Apply" to create the service
   - Render will start building your site
   - Wait for the build to complete (usually 2-5 minutes)

6. **Access Your Site**
   - Once deployed, you'll get a URL like: `https://llm-directory.onrender.com`
   - Your site is now live!

### Method 2: Manual Static Site Creation

Deploy without using the blueprint configuration.

#### Step-by-Step Instructions:

1. **Sign in to Render**
   - Go to https://dashboard.render.com/
   - Sign in with your GitHub account

2. **Create New Static Site**
   - Click "New +" → "Static Site"

3. **Connect Repository**
   - Click "Connect a repository"
   - Choose your GitHub organization/account
   - Select the `LLM-Directory` repository
   - Click "Connect"

4. **Configure Build Settings**
   Fill in the following settings:

   - **Name**: `llm-directory` (or any name you prefer)
   - **Branch**: `main` (or your default branch)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Auto-Deploy**: Yes (recommended)

5. **Advanced Settings (Optional)**

   Click "Advanced" to configure:
   - **Environment Variables**: Add any environment variables (none required for basic setup)
   - **Pull Request Previews**: Enable to get preview deployments for PRs

6. **Create Static Site**
   - Click "Create Static Site"
   - Render will start building your site
   - Wait for deployment to complete

7. **Access Your Site**
   - Your site will be available at: `https://[your-site-name].onrender.com`

## Configuration Details

### render.yaml Breakdown

```yaml
services:
  - type: web                          # Service type
    name: llm-directory                # Service name
    env: static                        # Static site environment
    buildCommand: npm install && npm run build  # Build steps
    staticPublishPath: ./dist          # Output directory
    pullRequestPreviewsEnabled: true   # Enable PR previews
    headers:
      - path: /*
        name: Cache-Control
        value: public, max-age=3600    # Cache static assets for 1 hour
    routes:
      - type: rewrite
        source: /*
        destination: /index.html       # SPA routing support
    envVars:
      - key: NODE_VERSION
        value: 18                      # Use Node.js 18
```

### Key Features Enabled

✅ **Single Page Application (SPA) Support**
- All routes redirect to `/index.html`
- React Router works seamlessly

✅ **Pull Request Previews**
- Automatic preview deployments for every PR
- Test changes before merging

✅ **Caching Headers**
- Static assets cached for optimal performance
- 1-hour cache duration for better load times

✅ **Automatic Deploys**
- Push to GitHub → Automatic deployment
- No manual intervention needed

## Post-Deployment Setup

### Custom Domain

1. Go to your service dashboard on Render
2. Click "Settings" → "Custom Domain"
3. Click "Add Custom Domain"
4. Enter your domain name
5. Follow the DNS configuration instructions
6. Render will automatically provision an SSL certificate

### Environment Variables

If you need to add environment variables:

1. Go to your service dashboard
2. Click "Environment"
3. Click "Add Environment Variable"
4. Enter key and value
5. Save changes
6. Render will redeploy automatically

### Monitoring

Monitor your deployment:

1. **Build Logs**: View real-time build output
2. **Deploy History**: See all past deployments
3. **Metrics**: Monitor bandwidth and request counts
4. **Events**: Track service events and changes

## Troubleshooting

### ⚠️ Error: "Cannot find module '/opt/render/project/src/server.js'"

This error means Render is trying to run your app as a **Node.js Web Service** instead of a **Static Site**.

**Solution: Delete and recreate as Static Site**

1. **Delete the current service:**
   - Go to your Render Dashboard
   - Click on the service that's failing
   - Go to "Settings" (bottom of left sidebar)
   - Scroll down and click "Delete Service"
   - Confirm deletion

2. **Create a new Static Site (NOT Web Service):**
   - Go to https://dashboard.render.com/
   - Click "New +" → **"Static Site"** (NOT "Web Service")
   - Connect your GitHub repository
   - Render should auto-detect the `render.yaml` configuration
   - Click "Create Static Site"

3. **If auto-detection fails, manually configure:**
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: `dist`
   - Leave **Start Command** empty (static sites don't need this)

**Why this happens:**
- Selecting "Web Service" tells Render to run a Node.js server
- Our app is a static React site that doesn't need a server
- Static sites serve pre-built HTML/CSS/JS files directly

### Build Fails

If your build fails:

1. **Check Build Logs**
   - Go to the "Events" tab
   - Click on the failed deployment
   - Review the build output

2. **Common Issues**:
   - **Missing dependencies**: Ensure `package.json` is up to date
   - **Node version**: Render uses Node 14 by default, we specify Node 18 in `render.yaml`
   - **Build command**: Verify the build command in settings

3. **Test Locally**:
   ```bash
   # Clean install
   rm -rf node_modules package-lock.json
   npm install

   # Test build
   npm run build

   # Test preview
   npm run preview
   ```

### Site Not Loading

If your site deploys but doesn't load:

1. **Check Publish Directory**
   - Ensure it's set to `dist` (Vite's output directory)
   - Verify files exist in the `dist` folder after build

2. **Check Routes Configuration**
   - Ensure the rewrite rule is present for SPA support
   - All routes should redirect to `/index.html`

3. **Check Browser Console**
   - Look for JavaScript errors
   - Check network tab for failed requests

### Slow Build Times

If builds are taking too long:

1. **Review Dependencies**
   - Remove unused npm packages
   - Consider using a package cache

2. **Optimize Build**
   - Add `.node_modules` cache (Render does this automatically)
   - Ensure `npm ci` is used instead of `npm install` when possible

## Differences from Vercel

| Feature | Vercel | Render |
|---------|--------|--------|
| **Serverless Functions** | ✅ Supported in `/api` folder | ❌ Not for static sites |
| **Build Speed** | Very fast | Fast |
| **Free Bandwidth** | 100GB/month | 100GB/month |
| **Custom Domains** | ✅ Unlimited | ✅ Unlimited |
| **SSL Certificates** | ✅ Automatic | ✅ Automatic |
| **Pull Request Previews** | ✅ Yes | ✅ Yes |
| **Configuration** | `vercel.json` | `render.yaml` |

### Important Note: API Functions

The `/api/notify-visit.js` serverless function is **Vercel-specific** and will not work on Render static sites.

**Options if you need API functionality on Render:**

1. **Use Vercel for APIs**: Deploy to both platforms - Render for static site, Vercel for APIs
2. **Deploy separate web service**: Create an Express.js backend on Render
3. **Use external services**: Replace serverless functions with third-party APIs

## Continuous Deployment

Once set up, your deployment workflow is automatic:

```bash
# Make changes to your code
git add .
git commit -m "Update feature"
git push origin main
```

Render will automatically:
1. Detect the push to GitHub
2. Pull the latest code
3. Run `npm install && npm run build`
4. Deploy the new version
5. Make it live within minutes

## Support and Resources

- **Render Documentation**: https://render.com/docs
- **Status Page**: https://status.render.com/
- **Community Forum**: https://community.render.com/
- **Support**: Available through dashboard

## Comparison: When to Use Render vs Vercel

### Choose Render if:
- You prefer an all-in-one platform for static sites, web services, and databases
- You want simpler pricing (no surprise bills)
- You need PostgreSQL/Redis included
- You want explicit control over resources

### Choose Vercel if:
- You need serverless functions
- You want the fastest edge network
- You're deploying a Next.js application
- You need advanced analytics

### Use Both if:
- Deploy static site to Render
- Deploy APIs and serverless functions to Vercel
- Get the best of both platforms

---

**Deployment Status**: ✅ Ready to deploy to Render

**Next Steps**:
1. Push this repository to GitHub
2. Follow Method 1 (Blueprint Deployment) above
3. Your site will be live in minutes!

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
