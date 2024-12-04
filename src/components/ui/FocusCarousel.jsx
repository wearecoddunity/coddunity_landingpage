"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image } from 'next/image';

const FocusCarousel = ({ 
  images, 
  interval = 3000, 
  autoPlay = true,
  showControls = true,
  pauseOnHover = true
}) => {
  if (!images || !Array.isArray(images) || images.length === 0) {
    throw new Error("Images prop must be a non-empty array");
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const imagesLength = useMemo(() => images.length, [images]);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIdx) => (prevIdx >= imagesLength - 1 ? 0 : prevIdx + 1));
  }, [imagesLength]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIdx) => (prevIdx <= 0 ? imagesLength - 1 : prevIdx - 1));
  }, [imagesLength]);

  useEffect(() => {
    let timer;
    if (isPlaying && autoPlay) {
      timer = setInterval(nextSlide, interval);
    }
    return () => clearInterval(timer);
  }, [isPlaying, autoPlay, interval, nextSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const getSlidePosition = (index) => {
    if (index === activeIndex) return 'center';
    return index < activeIndex ? 'left' : 'right';
  };

  return (
    <div 
      className="relative mb-16 w-full h-96 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPlaying(false)}
      onMouseLeave={() => pauseOnHover && setIsPlaying(true)}
    >
      <AnimatePresence initial={false}>
        {images.map((image, index) => (
          getSlidePosition(index) === 'center' && (
            <motion.div
              key={index}
              custom={index - activeIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Trusted By Image ${index + 1}`}
                className="max-w-full max-h-full object-contain shadow-lg rounded-lg"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {showControls && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 
                       bg-white/50 hover:bg-white/75 p-2 rounded-full 
                       transition-all duration-300 ease-in-out"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-800" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 
                       bg-white/50 hover:bg-white/75 p-2 rounded-full 
                       transition-all duration-300 ease-in-out"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-800" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out 
                        ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FocusCarousel;