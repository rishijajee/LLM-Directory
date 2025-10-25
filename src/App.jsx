import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import EnhancedLLMTable from './components/EnhancedLLMTable';
import llmService from './services/llmService';
import useVisitTracker from './hooks/useVisitTracker';
import './App.css';

function App() {
  // Track visits and send email notifications
  // ⚠️ Set to false to disable email notifications
  useVisitTracker(true);
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState(null);
  const [nextRefreshTime, setNextRefreshTime] = useState('');

  // Fetch LLM models
  const fetchModels = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await llmService.getLLMModels();
      setModels(data);
      const now = new Date();
      setLastRefresh(now);
      llmService.setLastRefreshTime();
      updateNextRefreshTime();
    } catch (error) {
      console.error('Error fetching models:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Update next refresh time display
  const updateNextRefreshTime = () => {
    const timeUntil = llmService.getTimeUntilNextRefresh();
    const nextRefresh = new Date(Date.now() + timeUntil);
    setNextRefreshTime(format(nextRefresh, 'MMM dd, yyyy hh:mm a'));
  };

  // Handle manual refresh
  const handleRefresh = () => {
    fetchModels();
  };

  // Initial load and auto-refresh setup
  useEffect(() => {
    // Fetch models on mount
    fetchModels();

    // Check for auto-refresh every minute
    const autoRefreshInterval = setInterval(() => {
      if (llmService.shouldAutoRefresh()) {
        fetchModels();
      }
      updateNextRefreshTime();
    }, 60000); // Check every minute

    return () => clearInterval(autoRefreshInterval);
  }, [fetchModels]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <h1>🤖 LLM Directory</h1>
            <p className="subtitle">Comprehensive Guide to Large Language Models</p>
          </div>
          <div className="header-right">
            <button
              onClick={handleRefresh}
              className="refresh-button"
              disabled={isLoading}
              title="Refresh data now"
            >
              <svg
                className={`refresh-icon ${isLoading ? 'spinning' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
              <span>Refresh</span>
            </button>
            <Link to="/testing-tools" className="testing-tools-link">
              <svg
                className="tools-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              <span>Testing Tools</span>
            </Link>
          </div>
        </div>

        <div className="refresh-info">
          {lastRefresh && (
            <p className="last-refresh">
              Last updated: {format(lastRefresh, 'MMM dd, yyyy hh:mm:ss a')}
            </p>
          )}
          <p className="next-refresh">
            Next auto-refresh: {nextRefreshTime} EST
          </p>
        </div>
      </header>

      <main className="app-main">
        <section className="models-section">
          <div className="section-header">
            <h2>Top LLM Models</h2>
            <p className="model-count">{models.length} models listed</p>
          </div>
          <EnhancedLLMTable models={models} isLoading={isLoading} />
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 LLM Directory. Data refreshes daily at 9:00 AM EST.</p>
        <p className="footer-note">
          This directory provides information about major language models.
          Pricing and specifications may vary. Check official provider documentation for latest details.
        </p>
      </footer>
    </div>
  );
}

export default App;
