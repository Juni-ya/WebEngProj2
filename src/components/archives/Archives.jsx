import React, { useState, useEffect } from 'react';
import { Dropdown, Card, ListGroup, Accordion, Button } from 'react-bootstrap';
import { getRootTree } from '../../googleDrive';

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

  if (loading) return <div>Loading...</div>;
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
          <Accordion>
            {selectedYearData.children.map((course) => (
              <Accordion.Item key={course.id} eventKey={course.id}>
                <Accordion.Header>{course.name}</Accordion.Header>
                <Accordion.Body>
                  <ListGroup variant="flush">
                    {course.children.map((file) => (
                      <ListGroup.Item key={file.id} className="d-flex justify-content-between align-items-center">
                        {file.name}
                        <div>
                          <Button variant="outline-primary" size="sm" href={file.webViewLink} target="_blank">View</Button>
                          <Button variant="outline-success" size="sm" href={file.webContentLink} download>Download</Button>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </Card.Body>
    </Card>
  );
};

export default Archives;
