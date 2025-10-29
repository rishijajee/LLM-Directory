# LLM Directory - Deployment Guide

## Recent Changes Added

### Features Implemented:
1. ✅ **Architecture Column** - New column in the main table
2. ✅ **View Details Button** - Clickable button to view architecture details
3. ✅ **Architecture Modal** - Beautiful popup showing comprehensive architecture information
4. ✅ **Component Breakdown** - Displays all architectural components:
   - Core Architecture
   - Attention Mechanism
   - Reasoning Engine
   - Vision Encoder
   - Safety Layer
   - Memory System
   - Agent Capabilities
5. ✅ **Enhanced Scrolling** - Improved horizontal scrollbar styling
6. ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop

### Files Modified/Created:
- `src/services/llmService.js` - Added architecture data to all 16 models
- `src/components/LLMTable.jsx` - Added Architecture column and modal integration
- `src/components/ArchitectureModal.jsx` - NEW: Modal component for architecture details
- `src/components/ArchitectureModal.css` - NEW: Modal styling
- `src/App.css` - Enhanced table scrolling and architecture button styling
- `vercel.json` - NEW: Vercel deployment configuration

## Deployment Options

This project supports deployment to both **Vercel** and **Render**. Choose the platform that best fits your needs.

### Platform Comparison

| Feature | Vercel | Render |
|---------|--------|--------|
| Static Site Hosting | ✅ Yes | ✅ Yes |
| Serverless Functions | ✅ Yes | ❌ No (requires separate service) |
| Auto-deploy from GitHub | ✅ Yes | ✅ Yes |
| Custom domains | ✅ Yes | ✅ Yes |
| Free tier | ✅ Yes | ✅ Yes |

**Note**: The `/api/notify-visit.js` serverless function only works on Vercel. The main app works perfectly on both platforms.

---

## Vercel Deployment

### Option 1: Automatic Deployment via GitHub (Recommended)

If your repository is connected to Vercel:

1. Push your changes to GitHub:
   ```bash
   git push origin main
   ```

2. Vercel will automatically detect the push and deploy your changes

3. Check deployment status at: https://vercel.com/dashboard

### Option 2: Deploy with Vercel CLI

```bash
cd /mnt/c/Users/rishi/claudeprojects/LLM-Directory

# Deploy to production
vercel --prod

# Or just preview deployment
vercel
```

### Option 3: Manual Import to Vercel

1. Go to https://vercel.com/new
2. Import from GitHub: `rishijajee/LLM-Directory`
3. Vercel will auto-detect Vite and configure build settings
4. Click "Deploy"

---

## Render Deployment

### Option 1: Deploy from GitHub (Recommended)

1. Go to https://render.com/

2. Click "New +" → "Static Site"

3. Connect your GitHub repository: `rishijajee/LLM-Directory`

4. Render will auto-detect the `render.yaml` configuration

5. Click "Create Static Site"

6. Render will automatically build and deploy your site

### Option 2: Deploy with render.yaml Blueprint

1. In your Render dashboard, click "New +" → "Blueprint"

2. Connect your GitHub repository

3. Render will detect the `render.yaml` file and configure everything automatically

4. Review settings and click "Apply"

### Option 3: Manual Configuration

1. Go to https://render.com/ and click "New +" → "Static Site"

2. Connect your repository

3. Configure manually:
   - **Name**: llm-directory
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Auto-Deploy**: Yes

4. Click "Create Static Site"

## Build Configuration

### Vercel Configuration (`vercel.json`)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Render Configuration (`render.yaml`)
```yaml
services:
  - type: web
    name: llm-directory
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    pullRequestPreviewsEnabled: true
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

## Testing Your Deployment

Once deployed, test the new features:

1. ✅ Navigate to your Vercel URL
2. ✅ Scroll the table horizontally to see the new "Architecture" column
3. ✅ Click "View Details" on any model
4. ✅ Review the architecture modal with all component details
5. ✅ Test on mobile to ensure responsive design works
6. ✅ Press ESC or click outside to close the modal

## Architecture Data Included

Each model now has detailed architecture information including:

### Example (GPT-4):
- **Type**: Transformer-based Decoder
- **Layers**: ~96-120 transformer layers
- **Components**:
  - Core Architecture: Dense Transformer with MoE
  - Attention Mechanism: Multi-head self-attention
  - Reasoning Engine: Chain-of-thought reasoning
  - Vision Encoder: ViT for image processing
  - Safety Layer: RLHF alignment
  - Memory System: Context window management
  - Agent Capabilities: Function calling, tool use

All 16 models have similar detailed architecture breakdowns!

## Troubleshooting

If build fails:
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# Test build locally
npm run build

# Test production build
npm run preview
```

## Repository Info

- **GitHub**: https://github.com/rishijajee/LLM-Directory
- **Latest Commit**: Add architecture column and modal to LLM Directory
- **Branch**: main

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
