import React from "react";
import { Question as QuestionType } from "../data/questions";
import { Scroll } from "lucide-react";
import { motion } from "framer-motion";

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answerId: number) => void;
  currentQuestion: number;
  totalQuestions: number;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  onAnswer,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl border border-amber-200"
    >
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-between mb-6"
      >
        <Scroll className="w-8 h-8 text-amber-700" />
        <span className="text-amber-900 font-serif">
          Question {currentQuestion} of {totalQuestions}
        </span>
      </motion.div>

      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-serif text-amber-900 mb-6"
      >
        {question.text}
      </motion.h2>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-3"
      >
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswer(index)}
            className="w-full p-4 text-left bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-md transition-colors duration-200 font-serif text-amber-900"
          >
            {option}
          </motion.button>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-sm italic text-amber-700"
      >
        Remember: This is between you and God. Answer truthfully.
      </motion.p>
    </motion.div>
  );
};
