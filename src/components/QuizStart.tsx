import React, { useState } from 'react';
import { Scroll } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuizStartProps {
  onStart: (name: string) => void;
}

export const QuizStart: React.FC<QuizStartProps> = ({ onStart }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (name.trim().length < 2) {
      setError('Please enter your name (minimum 2 characters)');
      return;
    }
    onStart(name);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full mx-4 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-amber-200"
      >
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="text-center mb-8"
        >
          <Scroll className="w-16 h-16 mx-auto text-amber-700 mb-4" />
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-serif font-bold text-amber-900 mb-2"
          >
            Test your Faith nd' Truth
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-amber-800 italic"
          >
            "But test all things; hold fast what is good." - 1 Thessalonians 5:21
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="space-y-6"
        >
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-amber-900 mb-2"
            >
              Enter Your Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-2 border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
              placeholder="Your name"
            />
            {error && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mt-2 text-sm text-red-600"
              >
                {error}
              </motion.p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleStart}
            className="w-full py-3 px-4 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Begin Your Journey
          </motion.button>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-sm text-center text-amber-900 mt-4"
          >
            Embark on a journey of faith and understanding through 100 thought-provoking questions
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};