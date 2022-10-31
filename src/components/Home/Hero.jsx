import React from "react";

const Hero = () => {
  return (
    <section name="home" className="bg-white dark:bg-neutral-900">
      <div className="grid max-w-screen-xl md:h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <div className=" max-w-5xl mr-auto place-self-center ">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hello, I'm Jay 👋
          </h1>
          <p className="mb-6 font-light text-gray-500 lg:mb-8 text-2xl md:text-3xl xl:text-4xl dark:text-gray-400">
            I'm a Full-Stack Developer, a sneaker enthusiast, and have a passion
            for learning and coding, and I can also fly planes!
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-lg font-bold text-center text-white rounded-lg bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Projects
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
