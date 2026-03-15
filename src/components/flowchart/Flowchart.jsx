import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, GitMerge, ChevronsDown } from 'react-feather';
import styles from './Flowchart.module.css';

const DocumentFlowchart = () => {
  const [activeNode, setActiveNode] = useState(null);

  const toggleNode = (nodeName) => {
    setActiveNode(activeNode === nodeName ? null : nodeName);
  };

  const handleDownload = (fileName) => {
    alert(`Downloading: ${fileName}\n(This will fetch from Google Drive later)`);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="container">
      <div className={styles.flowchartContainer}>
        <h2 className={styles.title}>Extension Process Flowchart</h2>
        <p className={styles.subtitle}>Click a process step to view and download required templates.</p>

        <div className={styles.flowchartMap}>
          {/* Main Node 1 */}
          <button
            className={`${styles.mainNode} ${activeNode === 'MOA' ? styles.active : ''}`}
            onClick={() => toggleNode('MOA')}
          >
            <GitMerge size={20} />
            <span>Memorandum of Agreement (MOA) Process</span>
            <ChevronsDown size={20} style={{ transform: activeNode === 'MOA' ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}/>
          </button>

          <AnimatePresence>
            {activeNode === 'MOA' && (
              <motion.div
                className={styles.branchesContainer}
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div className={styles.connectorLine}></div>
                <div className={styles.branchWrapper}>
                  <button className={styles.downloadNode} onClick={() => handleDownload('Legal_Certificate_Template.docx')}>
                    <Download size={16} /> Legal Certificate
                  </button>
                  <button className={styles.downloadNode} onClick={() => handleDownload('Sustainability_Plan_Template.docx')}>
                    <Download size={16} /> Sustainability Plan
                  </button>
                  <button className={styles.downloadNode} onClick={() => handleDownload('MOA_Standard_Template.docx')}>
                    <Download size={16} /> MOA Template
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Node 2 */}
          <button
            className={styles.mainNode}
            onClick={() => alert('This is a placeholder for another process.')}
          >
            <GitMerge size={20} />
            <span>Project Proposal Phase</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentFlowchart;