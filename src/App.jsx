import { useEffect } from 'react';
import Lenis from 'lenis';

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
  // Set up Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // An array of the components to be rendered in sections
  const siteSections = [
    { id: 'home', component: <Home /> },
    { id: 'departments', component: <Departments /> },
    { id: 'flowchart', component: <Flowchart /> },
    { id: 'archives', component: <Archives /> },
  ];

  return (
    <>
      <Header />
      <main>
        {/* We can add a non-sticky introductory section if needed */}
        <div className="intro-section">
          <h1>Scroll to explore the components</h1>
        </div>

        {/* Map over the site sections and wrap each in a Section component */}
        {siteSections.map((section) => (
          <Section key={section.id}>
            {section.component}
          </Section>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
