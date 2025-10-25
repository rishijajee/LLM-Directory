import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TestingToolsDirectory from './pages/TestingToolsDirectory.jsx'
import ToscaDetailPage from './pages/ToscaDetailPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/testing-tools" element={<TestingToolsDirectory />} />
        <Route path="/tosca" element={<ToscaDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
