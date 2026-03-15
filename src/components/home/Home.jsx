import React from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BookOpen, GitMerge, Archive } from 'react-feather';
import styles from './Home.module.css';

const Home = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Carousel fade className={styles.carousel}>
        {/* Carousel items remain unchanged */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="First slide"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <h3>Welcome to the Research Portal</h3>
            <p>A centralized hub for all your academic and research needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            alt="Second slide"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <h3>Dynamic Document Flow</h3>
            <p>Visualize document processes with our interactive flowchart.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <div className={styles.featuresGrid}>
          <motion.div
            className={styles.featureCard}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BookOpen className={styles.featureIcon} size={32} />
            <h4>Explore Departments</h4>
            <p>Browse through all academic departments and their resources.</p>
          </motion.div>
          <motion.div
            className={styles.featureCard}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GitMerge className={styles.featureIcon} size={32} />
            <h4>Visualize Flowcharts</h4>
            <p>Understand complex processes with our interactive flowcharts.</p>
          </motion.div>
          <motion.div
            className={styles.featureCard}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration:0.5, delay: 0.3 }}
          >
            <Archive className={styles.featureIcon} size={32} />
            <h4>Access Archives</h4>
            <p>Instantly find and download thesis files from the repository.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
