import React from 'react';
import { format } from 'date-fns';

const LLMTable = ({ models, isLoading }) => {
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
    <div className="table-container">
      <div className="table-wrapper">
        <table className="llm-table">
          <thead>
            <tr>
              <th>Model Name</th>
              <th>Provider</th>
              <th>Release Date</th>
              <th>Parameters</th>
              <th>Context Window</th>
              <th>Description</th>
              <th>Use Cases</th>
              <th>Examples</th>
              <th>Pricing</th>
              <th>Strengths</th>
              <th>Limitations</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.id} className="model-row">
                <td className="model-name">{model.name}</td>
                <td className="provider">{model.provider}</td>
                <td className="release-date">{model.releaseDate}</td>
                <td className="parameters">{model.parameters}</td>
                <td className="context-window">{model.contextWindow}</td>
                <td className="description">{model.description}</td>
                <td className="use-cases">{model.useCases}</td>
                <td className="examples">{model.examples}</td>
                <td className="pricing">{model.pricing}</td>
                <td className="strengths">{model.strengths}</td>
                <td className="limitations">{model.limitations}</td>
                <td className="last-updated">
                  {format(new Date(model.lastUpdated), 'MMM dd, yyyy HH:mm:ss')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LLMTable;
