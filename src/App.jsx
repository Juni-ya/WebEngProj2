import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import all the components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Section from './components/common/Section';
import Home from './components/home/Home';
import Departments from './components/departments/Departments';
import Archives from './components/archives/Archives';
import Flowchart from './components/flowchart/Flowchart';

import './App.css';

/**
 * Main App component to orchestrate the scrollytelling layout.
 */
function App() {
  const lenisRef = useRef(null);

  // Set up Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const handleScrollTo = (target) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target);
    }
  };

  // An array of the components to be rendered in sections
  const siteSections = [
    { id: 'home', component: <Home /> },
    { id: 'departments', component: <Departments /> },
    { id: 'flowchart', component: <Flowchart /> },
    { id: 'archives', component: <Archives /> },
  ];

  return (
    <div>
      <Header onNavigate={handleScrollTo} />
      <main>
        {/* Map over the site sections and wrap each in a Section component */}
        {siteSections.map((section) => (
          <div id={section.id} key={section.id}>
            <Section>
              {section.component}
            </Section>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
