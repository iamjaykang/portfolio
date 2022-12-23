import { motion } from "framer-motion";
import React from "react";

const paragraph = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedSentence = ({ sentence }) => {
  const chars = sentence.split("");
  return (
    <motion.p
      className="mb-6 font-bold text-gray-500 lg:mb-8 text-2xl md:text-3xl xl:text-4xl dark:text-gray-400"
      variants={paragraph}
      initial="hidden"
      animate="visible"
    >
      {chars.map((char, i) => (
        <motion.span key={i} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedSentence;
