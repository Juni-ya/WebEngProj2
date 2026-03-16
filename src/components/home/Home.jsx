import React from 'react';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const departments = [
  { id: 'cse', name: 'Department of Computer Engineering' },
  { id: 'ece', name: 'Department of Electronics Engineering' },
  { id: 'eee', name: 'Department of Electrical Engineering' },
  { id: 'me', name: 'Department of Mechanical Engineering' },
  { id: 'ce', name: 'Department of Civil Engineering' },
  { id: 'ie', name: 'Department of Industrial Engineering' },
  { id: 'mfe', name: 'Department of Manufacturing Engineering' },
  { id: 'mce', name: 'Department of Mechatronics Engineering' },
  { id: 'che', name: 'Department of Chemical Engineering' },
  { id: 'arch', name: 'Department of Architecture' }
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const departmentChunks = chunkArray(departments, 3);

const Home = () => {
  return (
    <Container className="py-5">
      {/* COE Organizational Structure */}
      <section className="mb-5">
        <h2 className="text-center mb-4 bulsu-accent">College of Engineering Organizational Structure</h2>
        <Row className="justify-content-center mb-4">
          <Col md={6} lg={4}>
            <Card className="text-center shadow-lg mb-3 bulsu-border">
              <Card.Body>
                <Card.Title>Dean of the College</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} lg={3}>
            <Card className="text-center shadow-sm mb-3 bulsu-border">
              <Card.Body>
                <Card.Title>Associate Dean</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3}>
            <Card className="text-center shadow-sm mb-3 bulsu-border">
              <Card.Body>
                <Card.Title>College Secretary</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Department Carousel */}
      <section>
        <h2 className="text-center mb-4 bulsu-accent">Explore Our Departments</h2>
        <Carousel>
          {departmentChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {chunk.map(dept => (
                  <Col md={6} lg={4} key={dept.id} className="mb-3">
                    <Card className="text-center shadow-sm h-100 bulsu-border">
                      <Card.Body>
                        <Card.Title>{dept.name}</Card.Title>
                        <Link to={`/departments/${dept.id}`}>
                          <Button variant="primary">View Department</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </Container>
  );
};

export default Home;
