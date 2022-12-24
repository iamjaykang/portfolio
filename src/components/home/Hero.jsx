import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSentence from "../animatedSentence/AnimatedSentence";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} name="home" className="bg-white dark:bg-neutral-900">
      <div className="grid max-w-screen-xl md:h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <div className="flex flex-col items-start mr-auto place-self-center ">
          <motion.h1
            className="max-w-2xl mb-10 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white"
            initial={{ x: -400 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            animate={{ x: 0, y: 0 }}
          >
            Hello, I'm Jay{" "}
            {isInView ? (
              <motion.span
                className="inline-block origin-bottom-right"
                animate={{ rotate: 20 }}
                transition={{
                  repeatType: "reverse",
                  repeat: 10.5,
                  from: 0,
                  duration: 0.6,
                  ease: "easeInOut",
                  type: "tween",
                }}
              >
                👋
              </motion.span>
            ) : (
              <span>👋</span>
            )}
          </motion.h1>
            <AnimatedSentence
              sentence="I'm a Full-Stack developer, a sneaker enthusiast, and I have a passion for learning and coding. I can also fly planes!"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
