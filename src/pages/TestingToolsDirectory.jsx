import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTestingTools, getCategories, filterByCategory } from '../services/testingToolsService';
import '../App.css';
import './TestingToolsDirectory.css';

function TestingToolsDirectory() {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTestingTools();
  }, []);

  useEffect(() => {
    // Filter tools when category changes
    const filtered = filterByCategory(selectedCategory);
    setFilteredTools(filtered);
  }, [selectedCategory, tools]);

  const loadTestingTools = () => {
    setIsLoading(true);
    try {
      const data = getAllTestingTools();
      setTools(data.tools);
      setFilteredTools(data.tools);
      setLastUpdateTime(data.lastUpdateTime);
      setCategories(getCategories());
    } catch (error) {
      console.error('Error loading testing tools:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
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

        {/* Category Filter */}
        <div className="category-filter-section">
          <label htmlFor="category-select" className="filter-label">
            Filter by Category:
          </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category} ({category === 'All' ? tools.length : filterByCategory(category).length})
              </option>
            ))}
          </select>
        </div>
      </header>

      <main className="app-main testing-tools-main">
        {isLoading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading testing tools...</p>
          </div>
        ) : (
          <div className="content-wrapper">
            <div className="section-header">
              <h2>
                {selectedCategory === 'All'
                  ? `All Testing Tools (${filteredTools.length})`
                  : `${selectedCategory} (${filteredTools.length} tools)`}
              </h2>
              <p className="section-subtitle">
                From unit testing to performance testing and beyond
              </p>
            </div>

            <div className="table-wrapper">
              <div className="table-container">
                <table className="testing-tools-table">
                  <thead>
                    <tr>
                      <th>Tool Name</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Languages</th>
                      <th>Platforms</th>
                      <th>Best For</th>
                      <th>Pricing</th>
                      <th>Key Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTools.map((tool) => (
                      <tr key={tool.id}>
                        <td className="tool-name-col">
                          <strong>{tool.toolName}</strong>
                          {tool.website && (
                            <a
                              href={tool.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="tool-link"
                              title={`Visit ${tool.toolName} website`}
                            >
                              🔗
                            </a>
                          )}
                        </td>
                        <td className="category-col">
                          <span className={`category-badge ${tool.category.toLowerCase().replace(/[& ]/g, '-')}`}>
                            {tool.category}
                          </span>
                        </td>
                        <td className="description-col">{tool.description}</td>
                        <td className="languages-col">{tool.supportedLanguages}</td>
                        <td className="platforms-col">{tool.platforms}</td>
                        <td className="bestfor-col">{tool.bestFor}</td>
                        <td className="pricing-col">
                          <span className={`pricing-badge ${tool.pricing.toLowerCase().includes('free') ? 'pricing-free' : 'pricing-paid'}`}>
                            {tool.pricing}
                          </span>
                        </td>
                        <td className="features-col">{tool.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
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
