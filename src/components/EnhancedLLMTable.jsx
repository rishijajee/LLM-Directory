import React, { useState, useRef, useEffect, useMemo } from 'react';
import { format } from 'date-fns';
import ArchitectureModal from './ArchitectureModal';
import WebSearchResults from './WebSearchResults';
import webSearchService from '../services/webSearchService';
import './EnhancedLLMTable.css';

const EnhancedLLMTable = ({ models, isLoading }) => {
  // State management
  const [selectedArchitecture, setSelectedArchitecture] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedRows, setExpandedRows] = useState(new Set());
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterProvider, setFilterProvider] = useState('all');
  const [visibleColumns, setVisibleColumns] = useState({
    modelName: true,
    provider: true,
    releaseDate: true,
    parameters: true,
    contextWindow: true,
    description: true,
    useCases: true,
    examples: true,
    pricing: true,
    strengths: true,
    limitations: true,
    architecture: true,
    lastUpdated: true
  });
  const [hoveredRow, setHoveredRow] = useState(null);

  // Web search state
  const [webResults, setWebResults] = useState([]);
  const [isWebSearching, setIsWebSearching] = useState(false);
  const [activeTab, setActiveTab] = useState('local'); // 'local' or 'web'

  const topScrollRef = useRef(null);
  const bottomScrollRef = useRef(null);

  // Synchronize scrollbars
  useEffect(() => {
    const topScroll = topScrollRef.current;
    const bottomScroll = bottomScrollRef.current;

    if (!topScroll || !bottomScroll) return;

    const syncScroll = (source, target) => {
      return () => {
        target.scrollLeft = source.scrollLeft;
      };
    };

    const handleTopScroll = syncScroll(topScroll, bottomScroll);
    const handleBottomScroll = syncScroll(bottomScroll, topScroll);

    topScroll.addEventListener('scroll', handleTopScroll);
    bottomScroll.addEventListener('scroll', handleBottomScroll);

    return () => {
      topScroll.removeEventListener('scroll', handleTopScroll);
      bottomScroll.removeEventListener('scroll', handleBottomScroll);
    };
  }, [models]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ctrl/Cmd + K for search focus
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('table-search')?.focus();
      }
      // ESC to clear search
      if (e.key === 'Escape' && searchTerm) {
        setSearchTerm('');
        setWebResults([]);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [searchTerm]);

  // Web search effect
  useEffect(() => {
    const performWebSearch = async () => {
      // Only search if there's a query with at least 2 characters
      if (searchTerm.length < 2) {
        setWebResults([]);
        return;
      }

      setIsWebSearching(true);
      try {
        const results = await webSearchService.searchWeb(searchTerm);
        setWebResults(results);
      } catch (error) {
        console.error('Web search failed:', error);
        setWebResults([]);
      } finally {
        setIsWebSearching(false);
      }
    };

    // Debounce web search to avoid too many API calls
    const timeoutId = setTimeout(performWebSearch, 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // Sorting logic
  const sortedModels = useMemo(() => {
    if (!models) return [];

    let sorted = [...models];

    if (sortConfig.key) {
      sorted.sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];

        // Handle nested architecture type
        if (sortConfig.key === 'architectureType') {
          aVal = a.architecture?.type || '';
          bVal = b.architecture?.type || '';
        }

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return sorted;
  }, [models, sortConfig]);

  // Filtering logic
  const filteredModels = useMemo(() => {
    return sortedModels.filter(model => {
      const matchesSearch = searchTerm === '' ||
        model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesProvider = filterProvider === 'all' || model.provider === filterProvider;

      return matchesSearch && matchesProvider;
    });
  }, [sortedModels, searchTerm, filterProvider]);

  // Get unique providers
  const providers = useMemo(() => {
    if (!models) return [];
    return [...new Set(models.map(m => m.provider))].sort();
  }, [models]);

  // Handlers
  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const toggleRow = (id) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleArchitectureClick = (model) => {
    setSelectedArchitecture(model);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArchitecture(null);
  };

  const toggleColumn = (column) => {
    setVisibleColumns(prev => ({ ...prev, [column]: !prev[column] }));
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return '⇅';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading LLM models...</p>
      </div>
    );
  }

  if (!models || models.length === 0) {
    return (
      <div className="empty-state">
        <p>No LLM models available</p>
      </div>
    );
  }

  return (
    <div className="enhanced-table-container">
      {/* Control Panel */}
      <div className="table-controls">
        <div className="control-section">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              id="table-search"
              type="text"
              placeholder="Search models... (Ctrl/Cmd + K)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input-enhanced"
            />
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm('')}>
                ×
              </button>
            )}
          </div>

          <select
            value={filterProvider}
            onChange={(e) => setFilterProvider(e.target.value)}
            className="provider-filter"
          >
            <option value="all">All Providers</option>
            {providers.map(provider => (
              <option key={provider} value={provider}>{provider}</option>
            ))}
          </select>
        </div>

        {/* Column Toggles */}
        <div className="column-toggles">
          <span className="toggle-label">Columns:</span>
          <div className="toggle-buttons">
            {Object.entries(visibleColumns).map(([key, visible]) => (
              <button
                key={key}
                className={`toggle-btn ${visible ? 'active' : ''}`}
                onClick={() => toggleColumn(key)}
                title={`Toggle ${key}`}
              >
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            ))}
          </div>
        </div>

        <div className="results-info">
          Showing {filteredModels.length} of {models.length} models
        </div>
      </div>

      {/* Search Result Tabs */}
      {searchTerm && (
        <div className="search-tabs">
          <button
            className={`search-tab ${activeTab === 'local' ? 'active' : ''}`}
            onClick={() => setActiveTab('local')}
          >
            📋 Local Results ({filteredModels.length})
          </button>
          <button
            className={`search-tab ${activeTab === 'web' ? 'active' : ''}`}
            onClick={() => setActiveTab('web')}
          >
            🌐 Web Results {isWebSearching ? '(Searching...)' : `(${webResults.length})`}
          </button>
        </div>
      )}

      {/* Local Table Results */}
      {(!searchTerm || activeTab === 'local') && (
      <div className="table-container">
        {/* Top Scrollbar */}
        <div className="scroll-wrapper-top" ref={topScrollRef}>
          <div className="scroll-content"></div>
        </div>

        {/* Main Table */}
        <div className="table-wrapper" ref={bottomScrollRef}>
          <table className="llm-table enhanced">
            <thead>
              <tr>
                <th className="expand-col"></th>
                {visibleColumns.modelName && (
                  <th onClick={() => handleSort('name')} className="sortable">
                    Model Name {getSortIcon('name')}
                  </th>
                )}
                {visibleColumns.provider && (
                  <th onClick={() => handleSort('provider')} className="sortable">
                    Provider {getSortIcon('provider')}
                  </th>
                )}
                {visibleColumns.releaseDate && (
                  <th onClick={() => handleSort('releaseDate')} className="sortable">
                    Release Date {getSortIcon('releaseDate')}
                  </th>
                )}
                {visibleColumns.parameters && (
                  <th onClick={() => handleSort('parameters')} className="sortable">
                    Parameters {getSortIcon('parameters')}
                  </th>
                )}
                {visibleColumns.contextWindow && (
                  <th onClick={() => handleSort('contextWindow')} className="sortable">
                    Context {getSortIcon('contextWindow')}
                  </th>
                )}
                {visibleColumns.description && <th>Description</th>}
                {visibleColumns.useCases && <th>Use Cases</th>}
                {visibleColumns.examples && <th>Examples</th>}
                {visibleColumns.pricing && <th>Pricing</th>}
                {visibleColumns.strengths && <th>Strengths</th>}
                {visibleColumns.limitations && <th>Limitations</th>}
                {visibleColumns.architecture && <th>Architecture</th>}
                {visibleColumns.lastUpdated && (
                  <th onClick={() => handleSort('lastUpdated')} className="sortable">
                    Updated {getSortIcon('lastUpdated')}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {filteredModels.map((model) => (
                <React.Fragment key={model.id}>
                  <tr
                    className={`model-row ${expandedRows.has(model.id) ? 'expanded' : ''} ${hoveredRow === model.id ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredRow(model.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="expand-col">
                      <button
                        className="expand-btn"
                        onClick={() => toggleRow(model.id)}
                        aria-label={expandedRows.has(model.id) ? 'Collapse' : 'Expand'}
                      >
                        {expandedRows.has(model.id) ? '▼' : '▶'}
                      </button>
                    </td>
                    {visibleColumns.modelName && <td className="model-name">{model.name}</td>}
                    {visibleColumns.provider && <td className="provider">{model.provider}</td>}
                    {visibleColumns.releaseDate && <td className="release-date">{model.releaseDate}</td>}
                    {visibleColumns.parameters && <td className="parameters">{model.parameters}</td>}
                    {visibleColumns.contextWindow && <td className="context-window">{model.contextWindow}</td>}
                    {visibleColumns.description && <td className="description">{model.description}</td>}
                    {visibleColumns.useCases && <td className="use-cases">{model.useCases}</td>}
                    {visibleColumns.examples && <td className="examples">{model.examples}</td>}
                    {visibleColumns.pricing && <td className="pricing">{model.pricing}</td>}
                    {visibleColumns.strengths && <td className="strengths">{model.strengths}</td>}
                    {visibleColumns.limitations && <td className="limitations">{model.limitations}</td>}
                    {visibleColumns.architecture && (
                      <td className="architecture-link">
                        <button
                          className="architecture-btn"
                          onClick={() => handleArchitectureClick(model)}
                        >
                          View Details
                        </button>
                      </td>
                    )}
                    {visibleColumns.lastUpdated && (
                      <td className="last-updated">
                        {format(new Date(model.lastUpdated), 'MMM dd, yyyy HH:mm:ss')}
                      </td>
                    )}
                  </tr>

                  {/* Expanded Row Details */}
                  {expandedRows.has(model.id) && (
                    <tr className="expanded-details">
                      <td colSpan={Object.values(visibleColumns).filter(Boolean).length + 1}>
                        <div className="details-content">
                          <div className="detail-section">
                            <h4>Architecture Type</h4>
                            <p>{model.architecture?.type || 'N/A'}</p>
                          </div>
                          <div className="detail-section">
                            <h4>Training Method</h4>
                            <p>{model.architecture?.trainingMethod || 'N/A'}</p>
                          </div>
                          <div className="detail-section">
                            <h4>Layers</h4>
                            <p>{model.architecture?.layers || 'N/A'}</p>
                          </div>
                          <div className="detail-section full-width">
                            <button
                              className="view-full-arch-btn"
                              onClick={() => handleArchitectureClick(model)}
                            >
                              View Full Architecture Diagram →
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      )}

      {/* Web Search Results */}
      {searchTerm && activeTab === 'web' && (
        <WebSearchResults
          results={webResults}
          isLoading={isWebSearching}
          query={searchTerm}
        />
      )}

      {/* Hover Preview */}
      {hoveredRow && (
        <div className="hover-preview">
          <div className="preview-content">
            {filteredModels.find(m => m.id === hoveredRow)?.name}
            <span className="preview-hint">Click ▶ to expand • Click "View Details" for diagram</span>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Help */}
      <div className="shortcuts-hint">
        <kbd>Ctrl/Cmd</kbd> + <kbd>K</kbd> to search • <kbd>ESC</kbd> to clear • Click headers to sort
      </div>

      {isModalOpen && selectedArchitecture && (
        <ArchitectureModal
          model={selectedArchitecture}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default EnhancedLLMTable;
