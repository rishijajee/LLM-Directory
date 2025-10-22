# Quick Start Guide - LLM Directory

## 🚀 Get Up and Running in 2 Minutes

### Step 1: Navigate to Project
```bash
cd /mnt/c/Users/rishi/claudeprojects/LLM-Directory
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: **http://localhost:5173**

That's it! 🎉

---

## 📋 What You'll See

### Header Section
- **LLM Directory** title with refresh button in top-right
- **Last updated** timestamp
- **Next auto-refresh** timer (refreshes at 9 AM EST daily)

### Search Section
- Search box to find AI/GenAI/LLM topics on the web
- Opens Google search in new tab with your query

### LLM Models Table
Comprehensive table with 16 LLM models including:

| Feature | Description |
|---------|-------------|
| **Model Name** | GPT-4, Claude 3.5, Gemini, Llama, etc. |
| **Provider** | OpenAI, Anthropic, Google, Meta, etc. |
| **Release Date** | When the model was released |
| **Parameters** | Model size (e.g., 175B, 1.76T) |
| **Context Window** | Token limit (e.g., 128K, 200K) |
| **Description** | Detailed model description |
| **Use Cases** | What it's best for |
| **Examples** | Real-world applications |
| **Pricing** | Cost information |
| **Strengths** | Key advantages |
| **Limitations** | Known constraints |
| **Last Updated** | Timestamp of data refresh |

---

## 🎯 Key Features to Try

### 1. Manual Refresh
Click the **Refresh** button in the top-right to update all data immediately.

### 2. Web Search
Type any AI topic (e.g., "GPT-4 vs Claude", "Llama fine-tuning") and click **Search Web** to open Google search.

### 3. Table Scrolling
The table is horizontally scrollable with a sticky header for easy navigation.

### 4. Responsive Design
Try resizing your browser - the layout adapts to all screen sizes!

---

## 🔧 Customization Tips

### Add Your Own LLM Model
Edit `src/services/llmService.js` and add a new entry to the `llmModels` array:

```javascript
{
  id: 17,
  name: 'Your Model',
  provider: 'Your Company',
  releaseDate: '2024-10',
  parameters: '100B',
  contextWindow: '64K tokens',
  description: 'Amazing new model...',
  useCases: 'Perfect for...',
  examples: 'Used in...',
  pricing: '$X per token',
  strengths: 'Fast, accurate',
  limitations: 'Requires GPU',
  lastUpdated: new Date().toISOString()
}
```

### Change Refresh Time
Edit `src/services/llmService.js`, find `shouldAutoRefresh()` and modify:

```javascript
const isAfter9AM = nowEST.getHours() >= 9; // Change 9 to your preferred hour
```

### Customize Colors
Edit `src/App.css`:

```css
.app {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

---

## 📊 Data Overview

Currently includes:
- **4 OpenAI models** (GPT-4, GPT-4 Turbo, GPT-3.5 Turbo, DALL-E 3)
- **3 Anthropic models** (Claude 3.5 Sonnet, Opus, Haiku)
- **3 Google models** (Gemini 1.5 Pro, Flash, PaLM 2)
- **2 Meta models** (Llama 3.1 405B, 70B)
- **2 Mistral models** (Large 2, Small)
- **2 Other models** (Cohere Command R+, Stable Diffusion XL)

**Total: 16 comprehensive LLM entries**

---

## 🐛 Troubleshooting

### Server won't start?
Make sure you're in the correct directory:
```bash
pwd
# Should show: /mnt/c/Users/rishi/claudeprojects/LLM-Directory
```

### Port 5173 already in use?
Kill the existing process:
```bash
# On Linux/Mac/WSL
lsof -ti:5173 | xargs kill -9

# Or change the port in vite.config.js
```

### Styles not loading?
Hard refresh the browser:
- **Windows/Linux:** Ctrl + Shift + R
- **Mac:** Cmd + Shift + R

---

## 📚 Next Steps

1. **Explore the table** - Scroll horizontally to see all columns
2. **Try the search** - Search for AI topics you're interested in
3. **Click refresh** - See the timestamp update in real-time
4. **Add your favorite models** - Customize the data
5. **Read the full README.md** - Learn about advanced features

---

## 🎓 Learning Resources

The codebase demonstrates:
- React hooks (useState, useEffect, useCallback)
- Component composition
- Service layer architecture
- Local storage usage
- Responsive CSS design
- Date/time manipulation
- Auto-refresh patterns

Perfect for learning modern React development!

---

**Ready to build something amazing? Start exploring!** 🚀
