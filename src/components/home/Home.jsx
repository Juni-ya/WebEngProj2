import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnimatedContent from '../common/AnimatedContent';
import BlurText from '../common/BlurText';
import DeconstructedCarousel from '../common/DeconstructedCarousel';

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
        <BlurText
          text="College of Engineering Organizational Structure"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-center mb-4 bulsu-accent h2"
          onAnimationComplete={() => console.log('Title animation completed!')}
        />
        <Row className="justify-content-center mb-4">
          <Col md={6} lg={4}>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={true}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.8}
              threshold={0.1}
              delay={0}
            >
              <Card className="text-center shadow-lg mb-3 bulsu-border">
                <Card.Body>
                  <Card.Title>Dean of the College</Card.Title>
                </Card.Body>
              </Card>
            </AnimatedContent>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} lg={3}>
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={true}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.8}
              threshold={0.1}
              delay={0.2}
            >
              <Card className="text-center shadow-sm mb-3 bulsu-border">
                <Card.Body>
                  <Card.Title>Associate Dean</Card.Title>
                </Card.Body>
              </Card>
            </AnimatedContent>
          </Col>
          <Col md={4} lg={3}>
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.8}
              threshold={0.1}
              delay={0.4}
            >
              <Card className="text-center shadow-sm mb-3 bulsu-border">
                <Card.Body>
                  <Card.Title>College Secretary</Card.Title>
                </Card.Body>
              </Card>
            </AnimatedContent>
          </Col>
        </Row>
      </section>

      {/* Department Carousel */}
      <section>
        <BlurText
          text="Explore Our Departments"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-center mb-4 bulsu-accent h2"
          onAnimationComplete={() => console.log('Departments title animation completed!')}
        />
        <DeconstructedCarousel items={departments} />
      </section>
    </Container>
  );
};

export default Home;
