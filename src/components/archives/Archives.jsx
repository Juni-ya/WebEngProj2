import React, { useState, useEffect } from 'react';
import { Dropdown, Card, Button } from 'react-bootstrap';
import { getRootTree } from '../../googleDrive';
import { LoadingIndicator } from '../application/loading-indicator/loading-indicator';
import AnimatedList from '../departments/AnimatedList';
import ArchivesAccordion from './ArchivesAccordion';

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
        setError('Failed to load archives');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTree();
  }, []);

  const selectedYearData = tree.find(year => year.name === selectedYear);

  if (loading) return <LoadingIndicator type="line-simple" size="md" />;
  if (error) return <div>{error}</div>;

  return (
    <Card className="shadow-sm bulsu-border">
      <Card.Header as="h2" className="text-center">Thesis Repository</Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-center mb-4">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg">
              Year: {selectedYear}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {tree.map((year) => (
                <Dropdown.Item key={year.id} onClick={() => setSelectedYear(year.name)}>
                  {year.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        
        {selectedYearData && (
          <ArchivesAccordion
            items={selectedYearData.children.map((course) => ({
              id: course.id,
              header: course.name,
              content: (
                <AnimatedList
                  items={course.children.map((file) => (
                    <div key={file.id} className="d-flex justify-content-between align-items-center w-100">
                      <span>{file.name}</span>
                      <div>
                        <Button variant="outline-primary" size="sm" href={file.webViewLink} target="_blank">View</Button>
                        <Button variant="outline-success" size="sm" href={file.webContentLink} download>Download</Button>
                      </div>
                    </div>
                  ))}
                  showGradients
                  enableArrowNavigation={false}
                  displayScrollbar
                />
              ),
            }))}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default Archives;
