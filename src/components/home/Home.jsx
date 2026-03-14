import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="First slide"
            style={{height: '500px', objectFit: 'cover', borderRadius: '15px'}}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h3>Welcome to the Research and Extension Portal</h3>
            <p>A centralized hub for all your academic and research needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            alt="Second slide"
            style={{height: '500px', objectFit: 'cover', borderRadius: '15px'}}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h3>Dynamic Document Flow</h3>
            <p>Visualize and navigate through document processes with our interactive flowchart.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Third slide"
            style={{height: '500px', objectFit: 'cover', borderRadius: '15px'}}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h3>Thesis Repository</h3>
            <p>Access thesis files organized by year and department.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="my-5">
        <Row>
          <Col>
            <Card className="text-center shadow">
              <Card.Body>
                <Card.Title as="h2" className="mb-4">Explore Our Features</Card.Title>
                <Card.Text>
                  Navigate through departments, view the thesis repository, and explore our document flowchart.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
