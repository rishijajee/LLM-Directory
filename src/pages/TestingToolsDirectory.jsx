import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTestingTools } from '../services/testingToolsService';
import EnhancedTestingToolsTable from '../components/EnhancedTestingToolsTable';
import '../App.css';
import './TestingToolsDirectory.css';

function TestingToolsDirectory() {
  const [tools, setTools] = useState([]);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTestingTools();
  }, []);

  const loadTestingTools = () => {
    setIsLoading(true);
    try {
      const data = getAllTestingTools();
      setTools(data.tools);
      setLastUpdateTime(data.lastUpdateTime);
    } catch (error) {
      console.error('Error loading testing tools:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header testing-tools-header">
        <div className="header-content">
          <div className="header-left">
            <h1>🔧 Automated Testing Tools Directory</h1>
            <p className="subtitle">Comprehensive Guide to Testing Platforms & Tools</p>
          </div>
          <div className="header-right">
            <Link to="/tosca" className="tosca-link">
              <svg
                className="tosca-icon"
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
              <span>TOSCA</span>
            </Link>
            <Link to="/" className="back-button">
              <svg
                className="back-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span>Back to LLM Directory</span>
            </Link>
          </div>
        </div>

        {lastUpdateTime && (
          <div className="refresh-info">
            <p className="last-refresh">Last updated: {lastUpdateTime}</p>
          </div>
        )}
      </header>

      <main className="app-main testing-tools-main">
        <section className="models-section">
          <div className="section-header">
            <h2>Testing Tools Directory</h2>
            <p className="model-count">26 comprehensive testing platforms and tools</p>
          </div>

          <EnhancedTestingToolsTable tools={tools} isLoading={isLoading} />
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Testing Tools Directory. Information subject to change.</p>
        <p className="footer-note">
          Comprehensive directory of automated testing tools and platforms
        </p>
      </footer>
    </div>
  );
}

export default TestingToolsDirectory;
