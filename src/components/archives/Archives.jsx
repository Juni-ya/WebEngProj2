import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getRootTree } from '../../googleDrive';
import { Folder, FileText, Download, ExternalLink, ChevronDown, Loader } from 'react-feather';
import styles from './Archives.module.css';

// Custom Accordion Item Component
const CourseAccordion = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className={styles.courseHeader} onClick={() => setIsOpen(!isOpen)}>
        <Folder size={20} />
        <span>{course.name}</span>
        <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.courseContent}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.fileList}>
              {course.children.map((file) => (
                <div key={file.id} className={styles.fileItem}>
                  <div className={styles.fileInfo}>
                    <FileText size={18} />
                    <span>{file.name}</span>
                  </div>
                  <div className={styles.fileActions}>
                    <a href={file.webViewLink} target="_blank" rel="noopener noreferrer" className={styles.actionButton} title="View">
                      <ExternalLink size={16} />
                    </a>
                    <a href={file.webContentLink} download className={styles.actionButton} title="Download">
                      <Download size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const Archives = () => {
  const [tree, setTree] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTree = async () => {
      try {
        const rootTree = await getRootTree();
        setTree(rootTree);
        if (rootTree.length > 0) {
          setSelectedYear(rootTree[0].name); // Default to first year
        }
      } catch (err) {
        setError('Failed to load archives from Google Drive. The folder may be private or the API key may be invalid.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTree();
  }, []);

  const selectedYearData = tree.find(year => year.name === selectedYear);

  return (
    <div className="container">
      <div className={styles.archivesContainer}>
        <h2 className={styles.title}>Thesis Repository</h2>
        
        {loading && <div className={styles.loading}><Loader className="animate-spin" /> Loading Archives...</div>}
        {error && <div className={styles.error}>{error}</div>}

        {!loading && !error && (
          <>
            <div className={styles.controls}>
              <select
                className={styles.yearSelector}
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {tree.map((year) => (
                  <option key={year.id} value={year.name}>
                    {year.name}
                  </option>
                ))}
              </select>
            </div>
            
            {selectedYearData && (
              <div className={styles.accordion}>
                {selectedYearData.children.map((course) => (
                  <CourseAccordion key={course.id} course={course} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Archives;
