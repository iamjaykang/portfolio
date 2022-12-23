import { motion } from "framer-motion";
import React from "react";

const CustomCursor = ({ variants }) => {
  return (
    <motion.div
      className="hidden lg:block border-gray-400 border h-8 w-8 rounded-full z-50 pointer-events-none overflow-hidden fixed top-0 left-0 ease-out duration-500"
      style={{
        transform: `translate3d(${variants.default.x}px, ${variants.default.y}px, 0)`,
      }}
    ></motion.div>
  );
};

export default CustomCursor;
