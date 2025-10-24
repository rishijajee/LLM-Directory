import React from 'react';
import './ArchitectureDiagram.css';

const DetailedArchitectureDiagram = ({ architecture, modelName }) => {
  const renderDetailedTransformerDiagram = () => {
    return (
      <svg className="arch-diagram detailed" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
        {/* Title */}
        <text x="500" y="30" className="diagram-title" textAnchor="middle">
          {modelName} - Complete Architecture
        </text>
        <text x="500" y="50" className="diagram-subtitle" textAnchor="middle">
          {architecture.type} • {architecture.layers}
        </text>

        {/* Input Layer with Details */}
        <rect x="400" y="80" width="200" height="70" className="diagram-box input-box" rx="8"/>
        <text x="500" y="105" className="box-text-bold" textAnchor="middle">Input Layer</text>
        <text x="500" y="125" className="box-text-small" textAnchor="middle">Text/Image Tokens</text>
        <text x="500" y="140" className="box-text-tiny" textAnchor="middle">Tokenization →  IDs</text>

        {/* Arrow with label */}
        <path d="M 500 150 L 500 180" className="arrow" markerEnd="url(#arrowhead)"/>
        <text x="520" y="168" className="arrow-label">Encode</text>

        {/* Embedding Layer with More Detail */}
        <rect x="375" y="180" width="250" height="90" className="diagram-box embedding-box" rx="8"/>
        <text x="500" y="210" className="box-text-bold" textAnchor="middle">Embedding Layer</text>
        <text x="500" y="230" className="box-text-small" textAnchor="middle">Token → Vector</text>
        <text x="500" y="248" className="box-text-tiny" textAnchor="middle">Positional Encoding</text>
        <text x="500" y="263" className="box-text-tiny" textAnchor="middle">Context Window: {architecture.contextWindow || 'N/A'}</text>

        {/* Arrow */}
        <path d="M 500 270 L 500 310" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Left Side: Attention Details */}
        <rect x="50" y="310" width="220" height="140" className="diagram-box side-box attention-detail" rx="8"/>
        <text x="160" y="335" className="box-text-bold" textAnchor="middle">Attention Mechanism</text>
        <text x="160" y="355" className="box-text-small" textAnchor="middle">{architecture.components['Attention Mechanism']?.substring(0, 50) || 'Multi-head attention'}...</text>
        <text x="160" y="380" className="box-text-tiny" textAnchor="middle">• Query, Key, Value</text>
        <text x="160" y="395" className="box-text-tiny" textAnchor="middle">• Self-Attention</text>
        <text x="160" y="410" className="box-text-tiny" textAnchor="middle">• Cross-Attention</text>
        <text x="160" y="425" className="box-text-tiny" textAnchor="middle">• Scaled Dot-Product</text>

        {/* Core Transformer with Details */}
        <rect x="300" y="310" width="400" height="140" className="diagram-box core-box" rx="8"/>
        <text x="500" y="335" className="diagram-title-small" textAnchor="middle">
          {architecture.type}
        </text>
        <text x="500" y="355" className="box-text" textAnchor="middle">{architecture.layers}</text>
        <text x="500" y="375" className="box-text-small" textAnchor="middle">Training: {architecture.trainingMethod?.substring(0, 40) || 'N/A'}...</text>

        {/* Core Architecture Details */}
        <text x="500" y="395" className="box-text-tiny" textAnchor="middle">
          {architecture.components['Core Architecture']?.substring(0, 60) || 'Transformer layers'}...
        </text>
        <text x="500" y="410" className="box-text-tiny" textAnchor="middle">• Feed-Forward Networks</text>
        <text x="500" y="425" className="box-text-tiny" textAnchor="middle">• Layer Normalization</text>
        <text x="500" y="440" className="box-text-tiny" textAnchor="middle">• Residual Connections</text>

        {/* Right Side: Memory System */}
        <rect x="730" y="310" width="220" height="140" className="diagram-box side-box memory-detail" rx="8"/>
        <text x="840" y="335" className="box-text-bold" textAnchor="middle">Memory System</text>
        <text x="840" y="355" className="box-text-small" textAnchor="middle">{architecture.components['Memory System']?.substring(0, 50) || 'Context management'}...</text>
        <text x="840" y="380" className="box-text-tiny" textAnchor="middle">• KV Cache</text>
        <text x="840" y="395" className="box-text-tiny" textAnchor="middle">• Sliding Window</text>
        <text x="840" y="410" className="box-text-tiny" textAnchor="middle">• Long-term Memory</text>
        <text x="840" y="425" className="box-text-tiny" textAnchor="middle">• Context Compression</text>

        {/* Arrows to side components */}
        <path d="M 300 380 L 270 380" className="arrow-thin" markerEnd="url(#arrowhead-small)"/>
        <path d="M 700 380 L 730 380" className="arrow-thin" markerEnd="url(#arrowhead-small)"/>

        {/* Arrow down */}
        <path d="M 500 450 L 500 490" className="arrow" markerEnd="url(#arrowhead)"/>
        <text x="520" y="473" className="arrow-label">Process</text>

        {/* Reasoning Engine with Details */}
        <rect x="325" y="490" width="350" height="100" className="diagram-box reasoning-box" rx="8"/>
        <text x="500" y="515" className="box-text-bold" textAnchor="middle">Reasoning Engine</text>
        <text x="500" y="535" className="box-text-small" textAnchor="middle">
          {architecture.components['Reasoning Engine']?.substring(0, 60) || 'Chain-of-thought reasoning'}...
        </text>
        <text x="500" y="555" className="box-text-tiny" textAnchor="middle">• Step-by-step decomposition</text>
        <text x="500" y="570" className="box-text-tiny" textAnchor="middle">• Logical inference</text>
        <text x="500" y="585" className="box-text-tiny" textAnchor="middle">• Problem solving</text>

        {/* Arrow */}
        <path d="M 500 590 L 500 620" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Safety Layer with Details */}
        <rect x="100" y="620" width="300" height="100" className="diagram-box safety-box" rx="8"/>
        <text x="250" y="645" className="box-text-bold" textAnchor="middle">Safety & Alignment</text>
        <text x="250" y="665" className="box-text-small" textAnchor="middle">
          {architecture.components['Safety Layer']?.substring(0, 50) || 'RLHF alignment'}...
        </text>
        <text x="250" y="685" className="box-text-tiny" textAnchor="middle">• Content filtering</text>
        <text x="250" y="700" className="box-text-tiny" textAnchor="middle">• Bias mitigation</text>
        <text x="250" y="715" className="box-text-tiny" textAnchor="middle">• Harmful content detection</text>

        {/* Agent Capabilities with Details */}
        <rect x="600" y="620" width="300" height="100" className="diagram-box agent-box" rx="8"/>
        <text x="750" y="645" className="box-text-bold" textAnchor="middle">Agent Capabilities</text>
        <text x="750" y="665" className="box-text-small" textAnchor="middle">
          {architecture.components['Agent Capabilities']?.substring(0, 50) || 'Tool use'}...
        </text>
        <text x="750" y="685" className="box-text-tiny" textAnchor="middle">• Function calling</text>
        <text x="750" y="700" className="box-text-tiny" textAnchor="middle">• External tool integration</text>
        <text x="750" y="715" className="box-text-tiny" textAnchor="middle">• Multi-step planning</text>

        {/* Arrows to safety and agents */}
        <path d="M 500 620 L 250 620" className="arrow-thin" markerEnd="url(#arrowhead-small)"/>
        <path d="M 500 620 L 750 620" className="arrow-thin" markerEnd="url(#arrowhead-small)"/>

        {/* Final arrow */}
        <path d="M 250 720 L 250 750 L 500 750" className="arrow" markerEnd="url(#arrowhead)"/>
        <path d="M 750 720 L 750 750 L 500 750" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Output with Details */}
        <rect x="400" y="750" width="200" height="70" className="diagram-box output-box" rx="8"/>
        <text x="500" y="775" className="box-text-bold" textAnchor="middle">Output Layer</text>
        <text x="500" y="795" className="box-text-small" textAnchor="middle">Generated Tokens</text>
        <text x="500" y="810" className="box-text-tiny" textAnchor="middle">Softmax → Text</text>

        {/* Vision Encoder (if applicable) */}
        {architecture.components['Vision Encoder'] && !architecture.components['Vision Encoder'].includes('Not') && (
          <>
            <rect x="50" y="80" width="200" height="80" className="diagram-box vision-box" rx="8"/>
            <text x="150" y="105" className="box-text-bold" textAnchor="middle">Vision Encoder</text>
            <text x="150" y="125" className="box-text-small" textAnchor="middle">
              {architecture.components['Vision Encoder']?.substring(0, 30)}...
            </text>
            <text x="150" y="145" className="box-text-tiny" textAnchor="middle">Image → Embeddings</text>
            <path d="M 250 120 L 375 210" className="arrow-thin" markerEnd="url(#arrowhead-small)"/>
          </>
        )}

        {/* Arrow definitions */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker id="arrowhead-small" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#718096" />
          </marker>
        </defs>

        {/* Info Box */}
        <rect x="20" y="750" width="360" height="40" className="info-box" rx="6"/>
        <text x="30" y="770" className="info-text">
          ℹ️ Training Method: {architecture.trainingMethod?.substring(0, 55) || 'N/A'}...
        </text>
      </svg>
    );
  };

  const renderDetailedDiffusionDiagram = () => {
    return (
      <svg className="arch-diagram detailed" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
        {/* Title */}
        <text x="500" y="30" className="diagram-title" textAnchor="middle">
          {modelName} - Diffusion Architecture
        </text>
        <text x="500" y="50" className="diagram-subtitle" textAnchor="middle">
          {architecture.type} • {architecture.layers}
        </text>

        {/* Text Input */}
        <rect x="50" y="100" width="200" height="70" className="diagram-box input-box" rx="8"/>
        <text x="150" y="125" className="box-text-bold" textAnchor="middle">Text Prompt</text>
        <text x="150" y="145" className="box-text-small" textAnchor="middle">User Description</text>
        <text x="150" y="160" className="box-text-tiny" textAnchor="middle">Natural Language</text>

        <path d="M 250 135 L 320 135" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Text Encoder Details */}
        <rect x="320" y="100" width="250" height="70" className="diagram-box embedding-box" rx="8"/>
        <text x="445" y="125" className="box-text-bold" textAnchor="middle">Text Encoder</text>
        <text x="445" y="145" className="box-text-small" textAnchor="middle">
          {architecture.components['Text Encoder']?.substring(0, 40) || 'Language model'}...
        </text>
        <text x="445" y="160" className="box-text-tiny" textAnchor="middle">Text → Embeddings</text>

        <path d="M 445 170 L 445 220" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Random Noise */}
        <rect x="50" y="250" width="200" height="70" className="diagram-box side-box" rx="8"/>
        <text x="150" y="275" className="box-text-bold" textAnchor="middle">Random Noise</text>
        <text x="150" y="295" className="box-text-small" textAnchor="middle">Gaussian Distribution</text>
        <text x="150" y="310" className="box-text-tiny" textAnchor="middle">Starting Point</text>

        <path d="M 250 285 L 320 285" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Diffusion U-Net */}
        <rect x="320" y="220" width="400" height="130" className="diagram-box core-box" rx="8"/>
        <text x="520" y="245" className="diagram-title-small" textAnchor="middle">Diffusion U-Net</text>
        <text x="520" y="265" className="box-text" textAnchor="middle">
          {architecture.components['Diffusion Process']?.substring(0, 50) || 'Iterative denoising'}...
        </text>
        <text x="520" y="285" className="box-text-small" textAnchor="middle">Training: {architecture.trainingMethod?.substring(0, 35) || 'N/A'}...</text>
        <text x="520" y="305" className="box-text-tiny" textAnchor="middle">• Encoder: Downsample</text>
        <text x="520" y="320" className="box-text-tiny" textAnchor="middle">• Middle: Process at lowest resolution</text>
        <text x="520" y="335" className="box-text-tiny" textAnchor="middle">• Decoder: Upsample</text>

        {/* Cross-Attention */}
        <rect x="750" y="240" width="200" height="90" className="diagram-box attention-detail" rx="8"/>
        <text x="850" y="265" className="box-text-bold" textAnchor="middle">Cross-Attention</text>
        <text x="850" y="285" className="box-text-small" textAnchor="middle">Text ↔ Image</text>
        <text x="850" y="305" className="box-text-tiny" textAnchor="middle">Conditioning</text>
        <text x="850" y="320" className="box-text-tiny" textAnchor="middle">on Text Embeddings</text>

        <path d="M 720 285 L 750 285" className="arrow-thin" markerEnd="url(#arrowhead-small)"/>

        <path d="M 520 350 L 520 390" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Refinement Stage */}
        {architecture.components['Refinement Stage'] && (
          <>
            <rect x="370" y="390" width="300" height="80" className="diagram-box reasoning-box" rx="8"/>
            <text x="520" y="415" className="box-text-bold" textAnchor="middle">Refinement Stage</text>
            <text x="520" y="435" className="box-text-small" textAnchor="middle">
              {architecture.components['Refinement Stage']?.substring(0, 40)}...
            </text>
            <text x="520" y="455" className="box-text-tiny" textAnchor="middle">• Detail enhancement</text>
            <text x="520" y="470" className="box-text-tiny" textAnchor="middle">• Quality improvement</text>

            <path d="M 520 470 L 520 500" className="arrow" markerEnd="url(#arrowhead)"/>
          </>
        )}

        {/* VAE Decoder */}
        <rect x="370" y="500" width="300" height="80" className="diagram-box embedding-box" rx="8"/>
        <text x="520" y="525" className="box-text-bold" textAnchor="middle">VAE Decoder</text>
        <text x="520" y="545" className="box-text-small" textAnchor="middle">
          {architecture.components['Image Decoder']?.substring(0, 40) || 'Latent to pixel'}...
        </text>
        <text x="520" y="565" className="box-text-tiny" textAnchor="middle">Latent Space → RGB Image</text>

        <path d="M 520 580 L 520 610" className="arrow" markerEnd="url(#arrowhead)"/>

        {/* Safety Filter */}
        <rect x="750" y="610" width="200" height="70" className="diagram-box safety-box" rx="8"/>
        <text x="850" y="635" className="box-text-bold" textAnchor="middle">Safety Filter</text>
        <text x="850" y="655" className="box-text-small" textAnchor="middle">
          {architecture.components['Safety Layer']?.substring(0, 30) || 'Content check'}...
        </text>
        <text x="850" y="670" className="box-text-tiny" textAnchor="middle">Policy enforcement</text>

        <path d="M 670 645 L 750 645" className="arrow-thin" markerEnd="url(#arrowhead-small)"/>

        {/* Generated Image */}
        <rect x="420" y="610" width="200" height="70" className="diagram-box output-box" rx="8"/>
        <text x="520" y="635" className="box-text-bold" textAnchor="middle">Generated Image</text>
        <text x="520" y="655" className="box-text-small" textAnchor="middle">High Quality</text>
        <text x="520" y="670" className="box-text-tiny" textAnchor="middle">1024x1024 (or higher)</text>

        {/* Arrow definitions */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker id="arrowhead-small" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 8 2.5, 0 5" fill="#718096" />
          </marker>
        </defs>

        {/* Info Box */}
        <rect x="20" y="630" width="380" height="40" className="info-box" rx="6"/>
        <text x="30" y="650" className="info-text">
          ℹ️ Training: {architecture.trainingMethod?.substring(0, 58) || 'N/A'}...
        </text>
      </svg>
    );
  };

  // Determine which diagram to render
  const isDiffusionModel = architecture.type?.toLowerCase().includes('diffusion');

  return (
    <div className="architecture-diagram-container">
      {isDiffusionModel ? renderDetailedDiffusionDiagram() : renderDetailedTransformerDiagram()}

      <div className="diagram-legend enhanced">
        <h4>Component Legend & Details:</h4>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-box input-box"></div>
            <span>Input/Output Layers</span>
          </div>
          <div className="legend-item">
            <div className="legend-box embedding-box"></div>
            <span>Embedding & Encoding</span>
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
          <div className="legend-item">
            <div className="legend-box agent-box"></div>
            <span>Agent Capabilities</span>
          </div>
          <div className="legend-item">
            <div className="legend-box side-box"></div>
            <span>Supporting Systems</span>
          </div>
          {architecture.components['Vision Encoder'] && !architecture.components['Vision Encoder'].includes('Not') && (
            <div className="legend-item">
              <div className="legend-box vision-box"></div>
              <span>Vision Processing</span>
            </div>
          )}
        </div>
      </div>

      <div className="architecture-specs">
        <h4>Technical Specifications:</h4>
        <div className="specs-grid">
          <div className="spec-item">
            <strong>Type:</strong> {architecture.type}
          </div>
          <div className="spec-item">
            <strong>Layers:</strong> {architecture.layers}
          </div>
          <div className="spec-item">
            <strong>Training:</strong> {architecture.trainingMethod}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedArchitectureDiagram;
