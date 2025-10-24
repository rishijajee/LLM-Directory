import React from 'react';
import './WebSearchResults.css';

const WebSearchResults = ({ results, isLoading, query }) => {
  if (isLoading) {
    return (
      <div className="web-search-loading">
        <div className="search-spinner"></div>
        <p>Searching the web for "{query}"...</p>
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className="web-search-empty">
        <p>🌐 No web results found for "{query}"</p>
        <p className="empty-hint">Try different keywords or check spelling</p>
      </div>
    );
  }

  return (
    <div className="web-search-results">
      <div className="results-header">
        <h3>🌐 Web Results ({results.length})</h3>
        <p className="results-subtitle">LLM models and resources from across the internet</p>
      </div>

      <div className="results-grid">
        {results.map((result, index) => (
          <div key={index} className="web-result-card">
            <div className="result-header">
              <span className="result-source">{result.source}</span>
              {result.type === 'curated' && (
                <span className="curated-badge">⭐ Curated</span>
              )}
            </div>

            <h4 className="result-title">
              <a href={result.link} target="_blank" rel="noopener noreferrer">
                {result.title}
              </a>
            </h4>

            <p className="result-snippet">{result.snippet}</p>

            <div className="result-footer">
              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="result-link"
              >
                Visit site →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="search-disclaimer">
        <p>
          💡 <strong>Tip:</strong> Web results include information from official sites,
          research papers, and curated resources. Always verify information from official sources.
        </p>
      </div>
    </div>
  );
};

export default WebSearchResults;
