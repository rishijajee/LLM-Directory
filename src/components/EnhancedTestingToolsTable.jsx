import React, { useState, useRef, useEffect, useMemo } from 'react';
import TestingToolArchitectureModal from './TestingToolArchitectureModal';
import './EnhancedLLMTable.css';

const EnhancedTestingToolsTable = ({ tools, isLoading }) => {
  // State management
  const [selectedTool, setSelectedTool] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedRows, setExpandedRows] = useState(new Set());
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [visibleColumns, setVisibleColumns] = useState({
    toolName: true,
    category: true,
    description: true,
    supportedLanguages: true,
    platforms: true,
    bestFor: true,
    pricing: true,
    features: true,
    aiIntegration: true,
    architecture: true
  });
  const [hoveredRow, setHoveredRow] = useState(null);

  const topScrollRef = useRef(null);
  const bottomScrollRef = useRef(null);

  // Synchronize scrollbars
  useEffect(() => {
    const topScroll = topScrollRef.current;
    const bottomScroll = bottomScrollRef.current;

    if (!topScroll || !bottomScroll) return;

    const table = bottomScroll.querySelector('table');
    const scrollContent = topScroll.querySelector('.scroll-content');
    if (table && scrollContent) {
      scrollContent.style.width = `${table.offsetWidth}px`;
    }

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
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('table-search')?.focus();
      }
      if (e.key === 'Escape' && searchTerm) {
        setSearchTerm('');
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [searchTerm]);

  // Sorting logic
  const sortedTools = useMemo(() => {
    if (!tools) return [];

    let sorted = [...tools];

    if (sortConfig.key) {
      sorted.sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];

        if (sortConfig.key === 'aiIntegration') {
          aVal = a.aiIntegration?.capability || '';
          bVal = b.aiIntegration?.capability || '';
        }

        if (typeof aVal === 'string') aVal = aVal.toLowerCase();
        if (typeof bVal === 'string') bVal = bVal.toLowerCase();

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return sorted;
  }, [tools, sortConfig]);

  // Filtering logic
  const filteredTools = useMemo(() => {
    return sortedTools.filter(tool => {
      const matchesSearch = searchTerm === '' ||
        tool.toolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.features.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.aiIntegration?.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = filterCategory === 'all' || tool.category === filterCategory;

      return matchesSearch && matchesCategory;
    });
  }, [sortedTools, searchTerm, filterCategory]);

  // Get unique categories
  const categories = useMemo(() => {
    if (!tools) return [];
    return [...new Set(tools.map(t => t.category))].sort();
  }, [tools]);

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

  const handleArchitectureClick = (tool) => {
    setSelectedTool(tool);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTool(null);
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
        <p>Loading testing tools...</p>
      </div>
    );
  }

  if (!tools || tools.length === 0) {
    return (
      <div className="empty-state">
        <p>No testing tools available</p>
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
              placeholder="Search tools... (Ctrl/Cmd + K)"
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
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="provider-filter"
          >
            <option value="all">All Categories ({tools.length})</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category} ({tools.filter(t => t.category === category).length})
              </option>
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
                {key === 'toolName' ? 'Tool Name' :
                 key === 'supportedLanguages' ? 'Languages' :
                 key === 'bestFor' ? 'Best For' :
                 key === 'aiIntegration' ? 'AI Integration' :
                 key.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            ))}
          </div>
        </div>

        <div className="results-count">
          Showing {filteredTools.length} of {tools.length} tools
        </div>
      </div>

      {/* Top Scrollbar */}
      <div className="top-scrollbar" ref={topScrollRef}>
        <div className="scroll-content"></div>
      </div>

      {/* Table */}
      <div className="table-wrapper" ref={bottomScrollRef}>
        <table className="testing-tools-table enhanced">
          <thead>
            <tr>
              {visibleColumns.toolName && (
                <th onClick={() => handleSort('toolName')} className="sortable">
                  Tool Name {getSortIcon('toolName')}
                </th>
              )}
              {visibleColumns.category && (
                <th onClick={() => handleSort('category')} className="sortable">
                  Category {getSortIcon('category')}
                </th>
              )}
              {visibleColumns.description && <th>Description</th>}
              {visibleColumns.supportedLanguages && <th>Languages</th>}
              {visibleColumns.platforms && <th>Platforms</th>}
              {visibleColumns.bestFor && <th>Best For</th>}
              {visibleColumns.pricing && (
                <th onClick={() => handleSort('pricing')} className="sortable">
                  Pricing {getSortIcon('pricing')}
                </th>
              )}
              {visibleColumns.features && <th>Key Features</th>}
              {visibleColumns.aiIntegration && (
                <th onClick={() => handleSort('aiIntegration')} className="sortable">
                  AI/Gen AI Integration {getSortIcon('aiIntegration')}
                </th>
              )}
              {visibleColumns.architecture && <th>Architecture</th>}
            </tr>
          </thead>
          <tbody>
            {filteredTools.map((tool) => (
              <tr
                key={tool.id}
                onMouseEnter={() => setHoveredRow(tool.id)}
                onMouseLeave={() => setHoveredRow(null)}
                className={hoveredRow === tool.id ? 'hovered' : ''}
              >
                {visibleColumns.toolName && (
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
                )}
                {visibleColumns.category && (
                  <td className="category-col">
                    <span className={`category-badge ${tool.category.toLowerCase().replace(/[& ]/g, '-')}`}>
                      {tool.category}
                    </span>
                  </td>
                )}
                {visibleColumns.description && (
                  <td className="description-col">{tool.description}</td>
                )}
                {visibleColumns.supportedLanguages && (
                  <td className="languages-col">{tool.supportedLanguages}</td>
                )}
                {visibleColumns.platforms && (
                  <td className="platforms-col">{tool.platforms}</td>
                )}
                {visibleColumns.bestFor && (
                  <td className="bestfor-col">{tool.bestFor}</td>
                )}
                {visibleColumns.pricing && (
                  <td className="pricing-col">
                    <span className={`pricing-badge ${tool.pricing.toLowerCase().includes('free') ? 'pricing-free' : 'pricing-paid'}`}>
                      {tool.pricing}
                    </span>
                  </td>
                )}
                {visibleColumns.features && (
                  <td className="features-col">{tool.features}</td>
                )}
                {visibleColumns.aiIntegration && (
                  <td className="ai-integration-col">
                    <div className="ai-integration-cell">
                      <span className={`ai-capability-badge ${tool.aiIntegration.capability.toLowerCase().replace(/[- ]/g, '-')}`}>
                        {tool.aiIntegration.capability}
                      </span>
                      <div className="ai-integration-details">
                        <strong>{tool.aiIntegration.integration}</strong>
                        <p className="ai-description">{tool.aiIntegration.description}</p>
                        <p className="ai-examples"><em>Examples:</em> {tool.aiIntegration.examples}</p>
                      </div>
                    </div>
                  </td>
                )}
                {visibleColumns.architecture && (
                  <td className="architecture-col">
                    <button
                      className="view-architecture-btn"
                      onClick={() => handleArchitectureClick(tool)}
                      title="View detailed architecture"
                    >
                      View Details
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Keyboard Shortcuts Info */}
      <div className="keyboard-shortcuts">
        <span className="shortcut">
          <kbd>Ctrl/Cmd</kbd> + <kbd>K</kbd> Search
        </span>
        <span className="shortcut">
          <kbd>ESC</kbd> Clear Search
        </span>
        <span className="shortcut">
          Click column headers to sort
        </span>
      </div>

      {/* Architecture Modal */}
      {isModalOpen && selectedTool && (
        <TestingToolArchitectureModal
          tool={selectedTool}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default EnhancedTestingToolsTable;
