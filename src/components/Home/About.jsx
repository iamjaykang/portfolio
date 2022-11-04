import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="bg-white h-screen lg:flex lg:justify-center lg:items-center lg:h-screen dark:bg-neutral-900 relative"
    >
      <div className="p-4 mx-auto max-w-screen-xl lg:p-4">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-16 text-3xl lg:text-5xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
            About
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:flex:row text-white dark:text-gray-500">
          <div className="lg:ml-8">
            <div className="mb-6">
              <p className="text-black dark:text-white text-xl lg:text-3xl">
                I am a Full Stack Developer that has been involved in the
                sneaker business which I co-founded for all of my professional
                career, I jumped in to the field of progamming at the start of
                2022 to change up my career pathway and challenge myself. Since
                the start of 2022, I found myself creating my own projects and
                collaborating with others which I found to enjoy.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl lg:text-3xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
                Prior Store
              </h3>
              <h4 className="mb-2 text-black dark:text-white text-lg font-bold lg:text-xl">
                2016-2022
              </h4>
              <p className="mb-6 text-black dark:text-white text-lg lg:text-xl">
                During the process of running our business, I experienced a
                little bit of Liquid and Jquery and a lot of software which was
                involved in acquiring stock, which ultimately lead me in to
                pursuing the software development pathway.
              </p>
              <h3 className="mb-4 text-xl lg:text-3xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
                Mission Ready HQ
              </h3>
              <h4 className="mb-2 text-black dark:text-white text-lg font-bold lg:text-xl">
                2022
              </h4>
              <p className="mb-6 text-black dark:text-white text-lg lg:text-xl">
                In the middle of 2022, I went on to join Mission Ready HQ after
                self teaching myself to code from the start of the year, I found
                to enjoy the journey as I got to experience working with other
                developers and UX designers at a very fast pace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
