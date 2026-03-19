import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnimatedContent from '../common/AnimatedContent';
import BlurText from '../common/BlurText';
import DeconstructedCarousel from '../common/DeconstructedCarousel';
import TiltedCard from '../departments/TiltedCard';

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
            <TiltedCard
              imageSrc={'/src/assets/placeholder.png'}
              altText="Dean of the College"
              captionText="Dean of the College"
              containerHeight="300px"
              imageHeight="300px"
              imageWidth="100%"
              scaleOnHover={1.08}
              rotateAmplitude={12}
              showMobileWarning={false}
              showTooltip={true}
              overlayContent={<div style={{fontWeight:'bold',fontSize:'1.2em',color:'#fff',textShadow:'0 2px 8px #000'}}>Dean of the College</div>}
              displayOverlayContent={true}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} lg={3}>
            <TiltedCard
              imageSrc={'/src/assets/placeholder.png'}
              altText="Associate Dean"
              captionText="Associate Dean"
              containerHeight="300px"
              imageHeight="300px"
              imageWidth="100%"
              scaleOnHover={1.08}
              rotateAmplitude={12}
              showMobileWarning={false}
              showTooltip={true}
              overlayContent={<div style={{fontWeight:'bold',fontSize:'1.2em',color:'#fff',textShadow:'0 2px 8px #000'}}>Associate Dean</div>}
              displayOverlayContent={true}
            />
          </Col>
          <Col md={4} lg={3}>
            <TiltedCard
              imageSrc={'/src/assets/placeholder.png'}
              altText="College Secretary"
              captionText="College Secretary"
              containerHeight="300px"
              imageHeight="300px"
              imageWidth="100%"
              scaleOnHover={1.08}
              rotateAmplitude={12}
              showMobileWarning={false}
              showTooltip={true}
              overlayContent={<div style={{fontWeight:'bold',fontSize:'1.2em',color:'#fff',textShadow:'0 2px 8px #000'}}>College Secretary</div>}
              displayOverlayContent={true}
            />
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
