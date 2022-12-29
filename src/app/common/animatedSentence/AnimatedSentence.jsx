import React, { useEffect, useState } from "react";

const AnimatedSentence = ({ text }) => {
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    if (phase === "typing") {
      const timer = setTimeout(() => {
        setTypedText((prevTypedText) => {
          const newTypedText = prevTypedText + text[prevTypedText.length];
          if (newTypedText.length === text.length) {
            setPhase("completed");
          }
          return newTypedText;
        });
      }, 25);
      return () => clearTimeout(timer);
    }
  }, [text, typedText, phase]);

  return (
    <div className="mt-2 mb-6 font-bold text-gray-500 lg:mb-8 text-2xl md:text-3xl xl:text-4xl dark:text-gray-400">
      <span
        data-testid="cursor"
        className={phase === "typing" ? "typing-cursor" : "blinking-cursor"}
      >
        {typedText}
      </span>
    </div>
  );
};

export default AnimatedSentence;
