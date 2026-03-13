import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Flowchart.css';

const DocumentFlowchart = () => {
  const [activeNode, setActiveNode] = useState(null);

  const toggleNode = (nodeName) => {
    setActiveNode(activeNode === nodeName ? null : nodeName);
  };

  const handleDownload = (fileName) => {
    alert(`Downloading: ${fileName}\n(This will fetch from Google Drive later)`);
  };

  return (
    <div className="flowchart-container">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">Extension Process Flowchart</Card.Header>
        <Card.Body className="text-center">
          <p className="text-muted">Click a process step to view and download required templates.</p>

          <div className="flowchart-map">
            {/* Main Node */}
            <button
              className={`main-node ${activeNode === 'MOA' ? 'active' : ''}`}
              onClick={() => toggleNode('MOA')}
            >
              1. Memorandum of Agreement (MOA) Process
            </button>

            {/* Branching Nodes */}
            {activeNode === 'MOA' && (
              <div className="branches-container">
                <div className="connector-line"></div>
                <div className="branch-wrapper">
                  <button className="download-node" onClick={() => handleDownload('Legal_Certificate_Template.docx')}>
                    📄 Legal Certificate
                  </button>
                  <button className="download-node" onClick={() => handleDownload('Sustainability_Plan_Template.docx')}>
                    🌿 Sustainability Plan
                  </button>
                  <button className="download-node" onClick={() => handleDownload('MOA_Standard_Template.docx')}>
                    ✍️ MOA Template
                  </button>
                </div>
              </div>
            )}

            {/* Placeholder for another main process */}
            <button
              className="main-node"
              onClick={() => alert('This is a placeholder for another process.')}
            >
              2. Project Proposal Phase
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DocumentFlowchart;