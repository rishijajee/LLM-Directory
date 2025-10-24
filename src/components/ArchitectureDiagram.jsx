import React from 'react';
import './ArchitectureDiagram.css';

const ArchitectureDiagram = ({ architecture, modelName }) => {
  // Extract component names for the diagram
  const components = Object.keys(architecture.components || {});

  // Different diagram layouts based on architecture type
  const renderTransformerDiagram = () => {
    return (
      <svg className="arch-diagram" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        {/* Title */}
        <text x="400" y="30" className="diagram-title" textAnchor="middle">
          {modelName} Architecture Flow
        </text>

        {/* Input Layer */}
        <rect x="325" y="60" width="150" height="50" className="diagram-box input-box" rx="8"/>
        <text x="400" y="90" className="box-text" textAnchor="middle">Input Tokens</text>

        {/* Arrow */}
        <path d="M 400 110 L 400 140" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Embedding Layer */}
        <rect x="300" y="140" width="200" height="50" className="diagram-box embedding-box" rx="8"/>
        <text x="400" y="170" className="box-text" textAnchor="middle">Token Embedding</text>

        {/* Arrow */}
        <path d="M 400 190 L 400 220" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Core Architecture */}
        <rect x="250" y="220" width="300" height="80" className="diagram-box core-box" rx="8"/>
        <text x="400" y="250" className="box-text-bold" textAnchor="middle">
          {architecture.type}
        </text>
        <text x="400" y="275" className="box-text-small" textAnchor="middle">
          {architecture.layers}
        </text>

        {/* Side Components */}
        <rect x="50" y="230" width="150" height="60" className="diagram-box side-box" rx="8"/>
        <text x="125" y="260" className="box-text-small" textAnchor="middle">Attention</text>
        <text x="125" y="280" className="box-text-small" textAnchor="middle">Mechanism</text>

        <rect x="600" y="230" width="150" height="60" className="diagram-box side-box" rx="8"/>
        <text x="675" y="260" className="box-text-small" textAnchor="middle">Memory</text>
        <text x="675" y="280" className="box-text-small" textAnchor="middle">System</text>

        {/* Connections to side components */}
        <path d="M 250 260 L 200 260" className="arrow-thin" markerEnd="url(#arrowhead-small)"/>
        <path d="M 550 260 L 600 260" className="arrow-thin" markerEnd="url(#arrowhead-small)"/>

        {/* Arrow down */}
        <path d="M 400 300 L 400 330" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Reasoning Engine */}
        <rect x="275" y="330" width="250" height="60" className="diagram-box reasoning-box" rx="8"/>
        <text x="400" y="360" className="box-text" textAnchor="middle">Reasoning Engine</text>
        <text x="400" y="380" className="box-text-small" textAnchor="middle">Chain-of-Thought</text>

        {/* Arrow */}
        <path d="M 400 390 L 400 420" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Safety Layer */}
        <rect x="300" y="420" width="200" height="50" className="diagram-box safety-box" rx="8"/>
        <text x="400" y="450" className="box-text" textAnchor="middle">Safety Layer</text>

        {/* Arrow */}
        <path d="M 400 470 L 400 500" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Output */}
        <rect x="325" y="500" width="150" height="50" className="diagram-box output-box" rx="8"/>
        <text x="400" y="530" className="box-text" textAnchor="middle">Output Tokens</text>

        {/* Agent Capabilities (side branch) */}
        <rect x="575" y="410" width="175" height="70" className="diagram-box agent-box" rx="8"/>
        <text x="662.5" y="435" className="box-text-small" textAnchor="middle">Agent Capabilities</text>
        <text x="662.5" y="455" className="box-text-tiny" textAnchor="middle">Function Calling</text>
        <text x="662.5" y="470" className="box-text-tiny" textAnchor="middle">Tool Use</text>

        <path d="M 525 445 L 575 445" className="arrow-thin" markerEnd="url(#arrowhead-small)"/>

        {/* Arrow definitions */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker id="arrowhead-small" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#718096" />
          </marker>
        </defs>
      </svg>
    );
  };

  const renderDiffusionDiagram = () => {
    return (
      <svg className="arch-diagram" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
        <text x="400" y="30" className="diagram-title" textAnchor="middle">
          {modelName} Diffusion Architecture
        </text>

        {/* Text Input */}
        <rect x="50" y="80" width="150" height="50" className="diagram-box input-box" rx="8"/>
        <text x="125" y="110" className="box-text" textAnchor="middle">Text Prompt</text>

        <path d="M 200 105 L 270 105" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Text Encoder */}
        <rect x="270" y="80" width="180" height="50" className="diagram-box embedding-box" rx="8"/>
        <text x="360" y="110" className="box-text" textAnchor="middle">Text Encoder</text>

        <path d="M 360 130 L 360 180" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Noise + Latent */}
        <rect x="50" y="200" width="150" height="50" className="diagram-box side-box" rx="8"/>
        <text x="125" y="230" className="box-text" textAnchor="middle">Random Noise</text>

        <path d="M 200 225 L 250 225" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Diffusion Process */}
        <rect x="250" y="180" width="300" height="90" className="diagram-box core-box" rx="8"/>
        <text x="400" y="210" className="box-text-bold" textAnchor="middle">Diffusion U-Net</text>
        <text x="400" y="235" className="box-text-small" textAnchor="middle">Iterative Denoising</text>
        <text x="400" y="255" className="box-text-tiny" textAnchor="middle">(Multiple Steps)</text>

        <path d="M 400 270 L 400 310" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Refinement (if applicable) */}
        <rect x="275" y="310" width="250" height="60" className="diagram-box reasoning-box" rx="8"/>
        <text x="400" y="340" className="box-text" textAnchor="middle">Refinement Stage</text>
        <text x="400" y="360" className="box-text-small" textAnchor="middle">(Detail Enhancement)</text>

        <path d="M 400 370 L 400 400" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Decoder */}
        <rect x="300" y="400" width="200" height="50" className="diagram-box embedding-box" rx="8"/>
        <text x="400" y="430" className="box-text" textAnchor="middle">VAE Decoder</text>

        <path d="M 400 450 L 400 470" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Output Image */}
        <rect x="325" y="470" width="150" height="50" className="diagram-box output-box" rx="8"/>
        <text x="400" y="500" className="box-text" textAnchor="middle">Generated Image</text>

        {/* Safety Check */}
        <rect x="575" y="470" width="175" height="50" className="diagram-box safety-box" rx="8"/>
        <text x="662.5" y="500" className="box-text-small" textAnchor="middle">Safety Filter</text>

        <path d="M 475 495 L 575 495" className="arrow-thin" markerEnd="url(#arrowhead-small)"/>

        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker id="arrowhead-small" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#718096" />
          </marker>
        </defs>
      </svg>
    );
  };

  // Determine which diagram to render
  const isDiffusionModel = architecture.type?.toLowerCase().includes('diffusion');

  return (
    <div className="architecture-diagram-container">
      {isDiffusionModel ? renderDiffusionDiagram() : renderTransformerDiagram()}

      <div className="diagram-legend">
        <h4>Legend:</h4>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-box input-box"></div>
            <span>Input/Output</span>
          </div>
          <div className="legend-item">
            <div className="legend-box core-box"></div>
            <span>Core Processing</span>
          </div>
          <div className="legend-item">
            <div className="legend-box reasoning-box"></div>
            <span>Reasoning/Refinement</span>
          </div>
          <div className="legend-item">
            <div className="legend-box safety-box"></div>
            <span>Safety/Filtering</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
