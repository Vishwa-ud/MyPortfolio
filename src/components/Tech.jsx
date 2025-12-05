import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

// Optimized card component with memoization to prevent unnecessary re-renders
const TechCard = React.memo(({ technology, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      className="tech-card-wrapper"
    >
      <div
        className="tech-card group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className="tech-card-bg" />
        
        {/* Icon container */}
        <div className="tech-icon-container">
          <img
            src={technology.icon}
            alt={technology.name}
            className="tech-icon"
            loading="lazy"
          />
        </div>

        {/* Tech name - shows on hover */}
        <div className={`tech-name ${isHovered ? 'tech-name-visible' : ''}`}>
          <p className="text-white text-sm font-medium text-center">
            {technology.name}
          </p>
        </div>

        {/* Hover glow effect */}
        <div className="tech-glow" />
      </div>
    </motion.div>
  );
});

TechCard.displayName = 'TechCard';

// Main Tech component
function Tech() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Tools & Technologies.</h2>
      </motion.div>

      {/* Tech Grid */}
      <div className="tech-grid">
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.name}
            technology={technology}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Tech, "tech");