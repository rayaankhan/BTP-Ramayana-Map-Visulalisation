// SplashScreen.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo1.png';

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 2500); // Splash screen duration
    return () => clearTimeout(timer);
  }, [onFinish]);

  const fadeInOut = {
    initial: { opacity: 0, scale: 1.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <div
      style={{
        display: isVisible ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#092337',
      }}
    >
      <div className="flex flex-col items-center text-center text-orange-600"> {/* Flexbox for centering */}
        <motion.img
          src={logo}
          alt="Logo"
          className="mb-4 w-48 h-48" // Adjusted logo size to be smaller
          variants={fadeInOut}
          initial="initial"
          animate="animate"
          exit="exit"
        />
        <motion.h1
          className="text-4xl font-bold"
          variants={fadeInOut}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          Ramayana4Everyone
        </motion.h1>
      </div>
    </div>
  );
};

export default SplashScreen;
