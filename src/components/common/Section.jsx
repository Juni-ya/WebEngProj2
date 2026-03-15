import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * A reusable component that creates a sticky section with a fade-in/slide-in animation on scroll.
 * @param {{children: React.ReactNode}} props
 */
const Section = ({ children }) => {
  const sectionRef = useRef(null);

  // Track scroll progress relative to this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'], // Animate as it enters and leaves the viewport
  });

  // Animate opacity and position based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ['30px', '0px', '0px', '-30px']);

  return (
    // The "track" for the sticky element. Its height determines the scroll duration.
    <div ref={sectionRef} className="sticky-section-track">
      <motion.div style={{ opacity, y }} className="sticky-content">
        {children}
      </motion.div>
    </div>
  );
};

export default Section;
