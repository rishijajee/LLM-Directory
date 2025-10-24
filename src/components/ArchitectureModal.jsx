import React, { useEffect } from 'react';
import './ArchitectureModal.css';

const ArchitectureModal = ({ model, onClose }) => {
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

  const { architecture, name, provider } = model;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{name} - Architecture Details</h2>
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
                <span className="meta-label">Provider:</span>
                <span className="meta-value">{provider}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Architecture Type:</span>
                <span className="meta-value">{architecture.type}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Layers:</span>
                <span className="meta-value">{architecture.layers}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Training Method:</span>
                <span className="meta-value">{architecture.trainingMethod}</span>
              </div>
            </div>
          </div>

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

          {/* Component Highlights */}
          <div className="architecture-section">
            <h3>Key Capabilities</h3>
            <div className="capabilities-list">
              {architecture.components['Agent Capabilities'] && (
                <div className="capability-item">
                  <strong>Agent Capabilities:</strong>
                  <p>{architecture.components['Agent Capabilities']}</p>
                </div>
              )}
              {architecture.components['Reasoning Engine'] && (
                <div className="capability-item">
                  <strong>Reasoning:</strong>
                  <p>{architecture.components['Reasoning Engine']}</p>
                </div>
              )}
              {architecture.components['Safety Layer'] && (
                <div className="capability-item">
                  <strong>Safety:</strong>
                  <p>{architecture.components['Safety Layer']}</p>
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

export default ArchitectureModal;
