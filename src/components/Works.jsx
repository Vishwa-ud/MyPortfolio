import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  date,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col border-2 border-[#915EFF] border-opacity-20 hover:border-opacity-60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#915EFF]/50'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>

          {date && (
            <div className='absolute bottom-3 left-3 bg-black bg-opacity-70 px-3 py-1 rounded-lg'>
              <p className='text-white text-[12px] font-semibold'>{date}</p>
            </div>
          )}
        </div>

        <div className='mt-5 flex-grow'>
          <h3 className='text-white font-bold text-[20px] sm:text-[24px] line-clamp-2'>{name}</h3>
          <p className='mt-2 text-secondary text-[13px] sm:text-[14px] line-clamp-4'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(3); // Desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= projects.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, projects.length - itemsPerPage) : Math.max(0, prevIndex - itemsPerPage)
    );
  };

  const goToSlide = (pageIndex) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div className='mt-20 relative px-4 sm:px-16 lg:px-20'>
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className='absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-[#151030] border-2 border-[#915EFF] hover:bg-[#915EFF] text-[#915EFF] hover:text-white p-2 sm:p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#915EFF]/50 transition-all duration-300 group backdrop-blur-sm'
          aria-label="Previous projects"
        >
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className='absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-[#151030] border-2 border-[#915EFF] hover:bg-[#915EFF] text-[#915EFF] hover:text-white p-2 sm:p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#915EFF]/50 transition-all duration-300 group backdrop-blur-sm'
          aria-label="Next projects"
        >
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, index) => (
              <ProjectCard 
                key={`project-${currentIndex + index}`} 
                index={index} 
                {...project} 
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className='flex justify-center items-center gap-3 mt-12'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                Math.floor(currentIndex / itemsPerPage) === index
                  ? 'w-10 h-3 bg-gradient-to-r from-[#915EFF] to-[#7c3aed]'
                  : 'w-3 h-3 bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className='text-center mt-6'>
          <p className='text-secondary text-[14px]'>
            Showing {currentIndex + 1}-{Math.min(currentIndex + itemsPerPage, projects.length)} of {projects.length} projects
          </p>
        </div>
      </div>
    </>
  );
};

const WrappedWorks = SectionWrapper(Works, "");
export default WrappedWorks;