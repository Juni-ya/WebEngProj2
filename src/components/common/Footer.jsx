import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-muted p-4 mt-auto border-top">
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} Project Elec. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
