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

          {/* Architecture Diagram (Visual Representation) */}
          <div className="architecture-section">
            <h3>Architecture Visualization</h3>
            <div className="architecture-diagram">
              <div className="diagram-layers">
                {architecture.layers.split('→').map((layer, index) => (
                  <React.Fragment key={index}>
                    <div className="diagram-layer">
                      <div className="layer-box">
                        {layer.trim()}
                      </div>
                    </div>
                    {index < architecture.layers.split('→').length - 1 && (
                      <div className="diagram-arrow">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
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
