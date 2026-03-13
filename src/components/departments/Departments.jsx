import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Card } from 'react-bootstrap';

const Departments = () => {
  const departmentList = [
    { name: 'Department of Computer Engineering', id: 'cse' },
    { name: 'Department of Electronics Engineering', id: 'ece' },
    { name: 'Department of Electrical Engineering', id: 'eee' },
    { name: 'Department of Mechanical Engineering', id: 'me' },
    { name: 'Department of Civil Engineering', id: 'ce' },
    { name: 'Department of Industrial Engineering', id: 'ie' },
    { name: 'Department of Chemical Engineering', id: 'che' },
    { name: 'Department of Architecture', id: 'arch' },
  ];

  return (
    <Card className="shadow-sm">
      <Card.Header as="h2" className="text-center">Academic Departments</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {departmentList.map((dept) => (
            <ListGroup.Item key={dept.id} action as={Link} to={`/departments/${dept.id}`} className="p-3">
              {dept.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Departments;
