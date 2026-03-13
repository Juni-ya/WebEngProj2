import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Breadcrumb, Row, Col, ListGroup } from 'react-bootstrap';

const departmentData = {
  cse: { name: 'Department of Computer Engineering' },
  ece: { name: 'Department of Electronics Engineering' },
  eee: { name: 'Department of Electrical Engineering' },
  me: { name: 'Department of Mechanical Engineering' },
  ce: { name: 'Department of Civil Engineering' },
  ie: { name: 'Department of Industrial Engineering' },
  che: { name: 'Department of Chemical Engineering' },
  arch: { name: 'Department of Architecture' },
};

const DepartmentDetails = () => {
  let { id } = useParams();
  const department = departmentData[id] || { name: 'Unknown Department' };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item as={Link} to="/departments">Departments</Breadcrumb.Item>
        <Breadcrumb.Item active>{department.name}</Breadcrumb.Item>
      </Breadcrumb>

      <Card className="shadow-sm">
        <Card.Header as="h2">{department.name}</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <Card.Title>Employee Portfolios</Card.Title>
              <ListGroup>
                <ListGroup.Item>Faculty Members</ListGroup.Item>
                <ListGroup.Item>Regular Staff</ListGroup.Item>
                <ListGroup.Item>Part-time Staff</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              <Card.Title>Research and Extension Activities</Card.Title>
              <ListGroup>
                <ListGroup.Item>Ongoing Research</ListGroup.Item>
                <ListGroup.Item>Completed Research</ListGroup.Item>
                <ListGroup.Item>Extension Projects</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default DepartmentDetails;
