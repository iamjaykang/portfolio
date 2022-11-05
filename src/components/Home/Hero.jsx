import React from "react";

const Hero = () => {
  return (
    <section name="home" className="bg-white dark:bg-neutral-900">
      <div className="grid max-w-screen-xl md:h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <div className="flex flex-col items-start mr-auto place-self-center ">
          <h1 className="max-w-2xl mb-10 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hello, I'm Jay 👋
          </h1>
          <p className="mb-6 font-bold text-gray-500 lg:mb-8 text-2xl md:text-3xl xl:text-4xl dark:text-gray-400">
            I'm a Full-Stack Developer, a sneaker enthusiast, and have passion
            for learning and coding, and I can also fly planes!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
