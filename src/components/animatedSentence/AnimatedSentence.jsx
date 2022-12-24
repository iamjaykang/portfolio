import React, { useEffect,useState } from "react";

const AnimatedSentence = ({ text }) => {
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypedText(text.slice(0, typedText.length + 1));
      if (typedText === text) {
        setPhase("completed");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [text, typedText]);
  return (
    <>
    <div className="mt-2 mb-6 font-bold text-gray-500 lg:mb-8 text-2xl md:text-3xl xl:text-4xl dark:text-gray-400">
      <span className={phase === "typing" ? "typing-cursor" : "blinking-cursor"}>
        {typedText}
      </span>
    </div>
    </>
  );
};

export default AnimatedSentence;
