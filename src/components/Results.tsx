import React, { useEffect } from "react";
import { Crown, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface ResultsProps {
  score: number;
  totalQuestions: number;
  playerName: string;
  onRestart: () => void;
}

const getAnalysis = (
  percentage: number
): { title: string; description: string; guidance: string } => {
  if (percentage >= 90) {
    return {
      title: "🌟 Faith Champion 🌟",
      description:
        "Wow! Your faith is unshakable, and your understanding is top-notch. You're like a spiritual superhero! 🦸‍♂️🦸‍♀️",
      guidance:
        "Keep shining your light! 🌟 Consider mentoring others or leading a study group to inspire and uplift those around you.",
    };
  } else if (percentage >= 70) {
    return {
      title: "📖 Dedicated Disciple",
      description:
        "You're well on your way with a solid grasp of your faith. There's a spark of potential that’s just waiting to ignite! 🔥",
      guidance:
        "Dive deeper into the Word and join a Bible study. Surround yourself with others who will sharpen your skills and faith! ✨",
    };
  } else if (percentage >= 50) {
    return {
      title: "🌱 Faith Seeker",
      description:
        "You're growing, step by step. You have the desire, and that's what matters most! Keep it up! 💪",
      guidance:
        "Focus on the basics: daily prayers and reading one chapter of the Bible each day. You’re doing great, and it only gets better from here! 🚀",
    };
  } else {
    return {
      title: "🔍 Curious Explorer",
      description:
        "You're just starting, and that’s a wonderful place to be! Every great journey begins with a single step. 🐾",
      guidance:
        "No worries—everyone starts somewhere! Try exploring the Gospels (Matthew, Mark, Luke, and John) and ask lots of questions. You've got this! 💡",
    };
  }
};

const triggerConfetti = () => {
  const duration = 3 * 1000;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = duration;

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50;

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};

export const Results: React.FC<ResultsProps> = ({
  score,
  totalQuestions,
  playerName,
  onRestart,
}) => {
  const percentage = (score / totalQuestions) * 100;
  const analysis = getAnalysis(percentage);

  useEffect(() => {
    if (percentage >= 70) {
      triggerConfetti();
    }
  }, [percentage]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl border border-amber-200"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <Crown className="w-16 h-16 mx-auto text-amber-700 mb-4" />
        <h2 className="text-3xl font-serif font-bold text-amber-900 mb-2">
          Journey Complete, {playerName}!
        </h2>
        <p className="text-lg text-amber-800 mb-6">
          "Well done, good and faithful servant." - Matthew 25:23
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-amber-50 p-6 rounded-lg mb-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="text-center mb-4"
        >
          <p className="text-4xl font-bold text-amber-900 mb-2">
            {percentage.toFixed(1)}%
          </p>
          <p className="text-amber-800">
            You answered {score} out of {totalQuestions} questions correctly
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="border-t border-amber-200 pt-4 mt-4"
        >
          <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">
            {analysis.title}
          </h3>
          <p className="text-amber-800 mb-4">{analysis.description}</p>
          <h4 className="font-serif font-bold text-amber-900 mb-2">
            Guidance:
          </h4>
          <p className="text-amber-800 mb-4">{analysis.guidance}</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="border-t border-amber-200 pt-4 mt-4"
        >
          <h4 className="font-serif font-bold text-amber-900 mb-2">
            Join Our Community:
          </h4>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://chat.whatsapp.com/HxoeoVTi6Go2b8XZxee0ys"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-amber-800 hover:text-amber-900"
          >
            <Share2 className="w-4 h-4" />
            Join our WhatsApp group for spiritual growth
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-4"
        >
          Begin Another Journey
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-sm text-amber-700 mt-6"
        >
          Created by Onario and Olive - Courtesy TFT
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
