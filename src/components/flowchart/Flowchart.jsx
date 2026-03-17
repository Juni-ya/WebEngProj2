import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Stepper, { Step } from './Stepper';
import './Flowchart.css';

const DocumentFlowchart = () => {
  const [completed, setCompleted] = useState(false);

  const handleDownload = (fileName) => {
    alert(`Downloading: ${fileName}\n(This will fetch from Google Drive later)`);
  };

  const handleStepChange = (step) => {
    console.log(`Step changed to: ${step}`);
  };

  const handleFinalStepCompleted = () => {
    console.log("MOA Process completed!");
    setCompleted(true);
  };

  if (completed) {
    return (
      <div className="flowchart-container">
        <Card className="shadow-sm bulsu-border">
          <Card.Body className="text-center py-5">
            <div className="completion-message">
              <h2 style={{ color: '#C8102E', marginBottom: '1rem' }}>🎉 Process Complete!</h2>
              <p className="text-muted">Your Memorandum of Agreement process has been successfully completed.</p>
              <p className="text-muted">All required documents have been prepared.</p>
              <Button
                variant="outline-primary"
                onClick={() => setCompleted(false)}
                className="mt-3"
              >
                Start New Process
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return (
    <div className="flowchart-container">
      <Card className="shadow-sm bulsu-border">
        <Card.Header as="h2" className="text-center">Memorandum of Agreement Process</Card.Header>
        <Card.Body>
          <Stepper
            initialStep={1}
            onStepChange={handleStepChange}
            onFinalStepCompleted={handleFinalStepCompleted}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <div className="step-content">
                <h2>📄 Legal Certificate</h2>
                <p>Download and complete the legal certificate template required for the MOA process.</p>
                <div className="document-actions mt-4">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={() => handleDownload('Legal_Certificate_Template.docx')}
                    className="me-2"
                  >
                    📄 Download Legal Certificate
                  </Button>
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => window.open('#', '_blank')}
                  >
                    ℹ️ View Instructions
                  </Button>
                </div>
              </div>
            </Step>

            <Step>
              <div className="step-content">
                <h2>🌿 Sustainability Plan</h2>
                <p>Prepare and submit the sustainability plan outlining long-term project viability.</p>
                <div className="document-actions mt-4">
                  <Button
                    variant="outline-success"
                    size="lg"
                    onClick={() => handleDownload('Sustainability_Plan_Template.docx')}
                    className="me-2"
                  >
                    🌿 Download Sustainability Plan
                  </Button>
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => window.open('#', '_blank')}
                  >
                    ℹ️ View Guidelines
                  </Button>
                </div>
              </div>
            </Step>

            <Step>
              <div className="step-content">
                <h2>✍️ MOA Template</h2>
                <p>Review and finalize the Memorandum of Agreement template with all required signatures.</p>
                <div className="document-actions mt-4">
                  <Button
                    variant="outline-warning"
                    size="lg"
                    onClick={() => handleDownload('MOA_Standard_Template.docx')}
                    className="me-2"
                  >
                    ✍️ Download MOA Template
                  </Button>
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => window.open('#', '_blank')}
                  >
                    ℹ️ View Sample
                  </Button>
                </div>
              </div>
            </Step>

            <Step>
              <div className="step-content">
                <h2>🎯 Final Review</h2>
                <p>Review all documents and submit for final approval.</p>
                <div className="completion-checklist mt-4">
                  <h4>Before completing:</h4>
                  <ul className="text-start" style={{ listStyle: 'none', padding: 0 }}>
                    <li>✅ Legal Certificate completed and signed</li>
                    <li>✅ Sustainability Plan approved</li>
                    <li>✅ MOA Template filled and reviewed</li>
                    <li>✅ All required documents attached</li>
                  </ul>
                </div>
              </div>
            </Step>
          </Stepper>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DocumentFlowchart;