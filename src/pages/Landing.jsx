import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen sm:px-2 bg-gradient-to-r from-blue-400 to-purple-900 flex flex-col items-center justify-center text-white">
     
      <main className="flex flex-col items-center text-center">
        <motion.h1 
          className="md:text-5xl text-2xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to LMS
        </motion.h1>
        <p className="text-lg italic mb-8 max-w-md">
          Discover our amazing product that will boost your productivity and simplify your tasks.
        </p>
        <Link to={'/home'} className="bg-white px-3 py-2 rounded-full font-semibold bg-gradient-to-r shadow from-red-500 to-purple-600 hover:bg-gray-200">Get Started</Link>
      </main>
      <footer className="mt-10">
        <p className="text-sm">&copy; 2025 LMS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;