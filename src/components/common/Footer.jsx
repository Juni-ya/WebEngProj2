import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bulsu-header text-center text-white p-4 mt-auto">
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} Bulacan State University - College of Engineering. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
