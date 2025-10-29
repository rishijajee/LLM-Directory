# 🤖 LLM Directory

A comprehensive, real-time directory of top Large Language Models (LLMs) with detailed information, use cases, and examples. Features automatic daily data refresh at 9 AM EST.

## ✨ Features

### 📊 Comprehensive LLM Database
- **16+ Top LLM Models** including GPT-4, Claude 3.5, Gemini, Llama, Mistral, and more
- **Detailed Information** for each model:
  - Provider and release date
  - Model parameters and context window
  - Comprehensive descriptions
  - Real-world use cases and examples
  - Pricing information
  - Strengths and limitations
  - Last update timestamp

### 🔄 Auto-Refresh System
- **Daily Auto-Refresh** at 9:00 AM EST
- **Manual Refresh Button** in the top-right corner
- **Smart Refresh Logic** - Only refreshes once per day after 9 AM EST
- **Last Update Tracker** - Shows when data was last refreshed
- **Next Refresh Timer** - Displays when the next auto-refresh will occur

### 🎨 Modern UI/UX
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Sticky Header** - Keeps controls accessible while scrolling
- **Color-Coded Table** - Easy-to-read information with semantic colors
- **Smooth Animations** - Loading spinners and hover effects
- **Gradient Theme** - Professional purple gradient design

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.19+ or v22.12+ required for Vite 7)
- npm or yarn

> **Note:** If you have Node.js v18, you can downgrade Vite to v5 by running:
> ```bash
> npm install -D vite@5 @vitejs/plugin-react@4
> ```

### Installation

1. Clone the repository:
```bash
cd LLM-Directory
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

This project supports deployment to both **Vercel** and **Render**:

### Deploy to Vercel
```bash
# Using Vercel CLI
vercel --prod
```

Or connect your GitHub repository at [vercel.com](https://vercel.com/new) for automatic deployments.

### Deploy to Render

Connect your GitHub repository at [render.com](https://render.com/) - Render will automatically detect the `render.yaml` configuration.

### Deployment Guides

- **Quick Start**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for both platforms
- **Detailed Render Guide**: See [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md)

**Platform Comparison:**
| Feature | Vercel | Render |
|---------|--------|--------|
| Static Hosting | ✅ Yes | ✅ Yes |
| Serverless Functions | ✅ Yes | ❌ No |
| Auto-deploy | ✅ Yes | ✅ Yes |
| Free Tier | ✅ Yes | ✅ Yes |

## 📁 Project Structure

```
LLM-Directory/
├── src/
│   ├── components/
│   │   └── LLMTable.jsx          # Table component for displaying LLM models
│   ├── services/
│   │   └── llmService.js         # LLM data service with auto-refresh logic
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Application styles
│   └── main.jsx                  # Application entry point
├── public/                       # Static assets
├── package.json                  # Project dependencies
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🛠️ Technology Stack

- **React 19.1** - UI library
- **Vite** - Build tool and dev server
- **date-fns** - Date formatting and manipulation
- **Axios** - HTTP client (ready for API integration)
- **CSS3** - Styling with modern features

## 📋 LLM Models Included

### OpenAI
- GPT-4, GPT-4 Turbo, GPT-3.5 Turbo
- DALL-E 3

### Anthropic
- Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku

### Google
- Gemini 1.5 Pro, Gemini 1.5 Flash
- PaLM 2

### Meta
- Llama 3.1 405B, Llama 3.1 70B

### Mistral AI
- Mistral Large 2, Mistral Small

### Others
- Cohere Command R+
- Stable Diffusion XL

## ⚙️ Configuration

### Auto-Refresh Settings

The application is configured to auto-refresh daily at 9:00 AM EST. This is controlled in `src/services/llmService.js`:

```javascript
// Modify this function to change refresh time
shouldAutoRefresh() {
  // Current: 9 AM EST
  // To change: Modify the hour check
  const isAfter9AM = nowEST.getHours() >= 9;
  // ...
}
```

### Adding New LLM Models

To add new models, edit `src/services/llmService.js` and add to the `llmModels` array:

```javascript
{
  id: 17,
  name: 'New Model Name',
  provider: 'Provider Name',
  releaseDate: '2024-XX',
  parameters: 'XXB',
  contextWindow: 'XX tokens',
  description: 'Model description...',
  useCases: 'Use cases...',
  examples: 'Examples...',
  pricing: 'Pricing info...',
  strengths: 'Key strengths...',
  limitations: 'Known limitations...',
  lastUpdated: new Date().toISOString()
}
```


## 🎯 Use Cases

This application is perfect for:

- **Developers** - Quickly compare LLM capabilities for project selection
- **Researchers** - Stay updated on the latest LLM releases and features
- **Product Managers** - Evaluate LLMs for product integration
- **Students** - Learn about different LLM models and their applications
- **AI Enthusiasts** - Keep track of the rapidly evolving LLM landscape

## 🔧 Customization

### Changing the Color Scheme

Edit `src/App.css`:

```css
/* Main gradient */
.app {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Change to your preferred colors */
.app {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

### Modifying Table Columns

Edit `src/components/LLMTable.jsx` to add/remove columns:

```jsx
<th>Your New Column</th>
// ...
<td>{model.yourNewField}</td>
```

## 📝 Data Persistence

The application uses `localStorage` to track refresh times:
- `llm-last-refresh` - Stores the timestamp of the last data refresh

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Add new LLM models to the database
2. Improve the UI/UX
3. Add new features
4. Fix bugs
5. Improve documentation

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Data compiled from official provider documentation
- Icons from [Lucide Icons](https://lucide.dev/)
- Inspired by the rapid advancement in AI and LLM technology

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository.

## 🗺️ Roadmap

- [ ] Integration with real-time API for live LLM data
- [ ] User authentication and favorites system
- [ ] Advanced filtering and sorting options
- [ ] Comparison view for side-by-side model analysis
- [ ] Historical pricing trends
- [ ] Performance benchmarks integration
- [ ] Community ratings and reviews
- [ ] Export functionality (PDF, CSV)

---

**Last Updated:** October 2024

**Made with ❤️ for the AI community**
