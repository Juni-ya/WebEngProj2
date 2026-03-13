import React, { useState } from 'react';
import { Dropdown, Card, ListGroup } from 'react-bootstrap';

const Archives = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const fiscalYears = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <Card className="shadow-sm">
      <Card.Header as="h2" className="text-center">Document Archives</Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-center mb-4">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg">
              Fiscal Year: {selectedYear}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {fiscalYears.map((year) => (
                <Dropdown.Item key={year} onClick={() => setSelectedYear(year)}>
                  {year}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        
        <Card.Title className="text-center">Displaying archives for {selectedYear}</Card.Title>
        <ListGroup variant="flush" className="mt-3">
          <ListGroup.Item>Annual Report - {selectedYear}.pdf</ListGroup.Item>
          <ListGroup.Item>Financial Statement - {selectedYear}.xlsx</ListGroup.Item>
          <ListGroup.Item>Q4 Research Summary - {selectedYear}.docx</ListGroup.Item>
          <ListGroup.Item>Extension Activity Report - {selectedYear}.pdf</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Archives;
