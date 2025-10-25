import React, { useEffect } from 'react';
import './ArchitectureModal.css';

const TestingToolArchitectureModal = ({ tool, onClose }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      onClose();
    }
  };

  const { architecture, toolName, category } = tool;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{toolName} - Architecture Details</h2>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>

        <div className="modal-body">
          {/* Architecture Overview */}
          <div className="architecture-section">
            <h3>Overview</h3>
            <div className="architecture-meta">
              <div className="meta-item">
                <span className="meta-label">Tool Name:</span>
                <span className="meta-value">{toolName}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Category:</span>
                <span className="meta-value">{category}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Architecture Type:</span>
                <span className="meta-value">{architecture.type}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Layers:</span>
                <span className="meta-value">{architecture.layers}</span>
              </div>
              {architecture.frameworkPattern && (
                <div className="meta-item">
                  <span className="meta-label">Framework Pattern:</span>
                  <span className="meta-value">{architecture.frameworkPattern}</span>
                </div>
              )}
            </div>
          </div>

          {/* Detailed Description */}
          {architecture.detailedDescription && (
            <div className="architecture-section">
              <h3>Detailed Architecture Description</h3>
              <div className="detailed-description">
                <p>{architecture.detailedDescription}</p>
              </div>
            </div>
          )}

          {/* Architecture Components */}
          <div className="architecture-section">
            <h3>Architecture Components</h3>
            <div className="components-grid">
              {Object.entries(architecture.components).map(([component, description]) => (
                <div key={component} className="component-card">
                  <h4 className="component-title">{component}</h4>
                  <p className="component-description">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Diagram - Layer Flow */}
          <div className="architecture-section">
            <h3>📐 Architecture Diagram - Layer Flow</h3>
            <p className="diagram-subtitle">Data flow through the testing framework layers</p>
            <div className="architecture-diagram">
              <div className="diagram-layers">
                {architecture.layers.split('→').map((layer, index) => (
                  <React.Fragment key={index}>
                    <div className="diagram-layer">
                      <div className="layer-box">
                        <div className="layer-number">{index + 1}</div>
                        <div className="layer-name">{layer.trim()}</div>
                      </div>
                    </div>
                    {index < architecture.layers.split('→').length - 1 && (
                      <div className="diagram-arrow">
                        <svg width="40" height="40" viewBox="0 0 40 40" className="arrow-svg">
                          <path d="M5 20 L30 20 M30 20 L25 15 M30 20 L25 25" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Framework Diagram - Component Interaction */}
          <div className="architecture-section">
            <h3>🔧 Framework Diagram - Component Interaction</h3>
            <p className="diagram-subtitle">How framework components interact during test execution</p>
            <div className="framework-diagram">
              <div className="framework-visual">
                {/* Central Test Engine */}
                <div className="framework-center">
                  <div className="center-node">
                    <div className="node-icon">⚙️</div>
                    <div className="node-label">Test Engine</div>
                    <div className="node-sublabel">{toolName}</div>
                  </div>
                </div>

                {/* Component Nodes around center */}
                <div className="framework-components">
                  {Object.entries(architecture.components).slice(0, 4).map(([component, description], index) => {
                    const positions = [
                      { top: '0%', left: '50%', transform: 'translate(-50%, -120%)' },      // Top
                      { top: '50%', right: '-10%', transform: 'translate(0%, -50%)' },     // Right
                      { bottom: '0%', left: '50%', transform: 'translate(-50%, 120%)' },   // Bottom
                      { top: '50%', left: '-10%', transform: 'translate(-100%, -50%)' }    // Left
                    ];

                    return (
                      <div
                        key={component}
                        className="component-node"
                        style={positions[index]}
                      >
                        <div className="node-box">
                          <div className="node-header">{component}</div>
                          <div className="node-desc">{description.substring(0, 50)}...</div>
                        </div>
                        <div className={`connector connector-${index}`}></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Legend */}
              <div className="framework-legend">
                <div className="legend-title">Framework Pattern:</div>
                <div className="legend-value">{architecture.frameworkPattern || 'Standard Test Framework Pattern'}</div>
              </div>

              {/* Additional Components List */}
              {Object.keys(architecture.components).length > 4 && (
                <div className="additional-components">
                  <div className="additional-title">Additional Components:</div>
                  <div className="additional-list">
                    {Object.entries(architecture.components).slice(4).map(([component, description]) => (
                      <div key={component} className="additional-item">
                        <strong>{component}:</strong> {description}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="modal-action-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestingToolArchitectureModal;
