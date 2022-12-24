import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="bg-white lg:flex lg:justify-center lg:items-center lg:min-h-screen dark:bg-neutral-900"
    >
      <div className="p-4 mx-auto max-w-screen-xl lg:p-4">
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-16 text-3xl lg:text-5xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
            About
          </h2>
        </div>
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 text-white dark:text-gray-500">
            <div className="mx-auto">
              <div className="mb-6">
                <p className="text-black dark:text-white text-xl lg:text-3xl">
                  I am a full-stack developer, I jumped into the field of programming at the start of
                  2022, where I have since created personal
                  projects and collaborated with others through Mission Ready
                  HQ.
                </p>
              </div>
              <div>
              <h3 className="mb-4 text-xl lg:text-3xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
                  Revived Design
                </h3>
                <h4 className="mb-2 text-black dark:text-white text-lg font-bold lg:text-xl">
                  2022
                </h4>
                <p className="mb-6 text-black dark:text-white text-lg lg:text-xl">
                  At the end of September, 2022. I went on to join Revived Design as an Intern Software Developer, where I learnt a new language (flutter) and got to hone my skills in testing and DevOps, even though there were challenges to begin with, I am glad to say that I overcame a lot of the obstacles by working closely with my mentor and through researching on possible solutions.
                </p>
                <h3 className="mb-4 text-xl lg:text-3xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
                  Mission Ready HQ
                </h3>
                <h4 className="mb-2 text-black dark:text-white text-lg font-bold lg:text-xl">
                  2022
                </h4>
                <p className="mb-6 text-black dark:text-white text-lg lg:text-xl">
                  In the middle of 2022, I went on to join Mission Ready HQ
                  after I began self-teaching myself to code at the start of the
                  year. I enjoyed the journey as I got to experience working
                  with other developers and UX designers and learn new
                  frameworks and tools.
                </p>
                <h3 className="mb-4 text-xl lg:text-3xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
                  Prior Store
                </h3>
                <h4 className="mb-2 text-black dark:text-white text-lg font-bold lg:text-xl">
                  2016-2022
                </h4>
                <p className="mb-6 text-black dark:text-white text-lg lg:text-xl">
                  During the process of running our business, I experienced a
                  little bit of Liquid and Jquery in managing our shopify
                  website and a lot of software which was involved in acquiring
                  stock which was very interesting to me, this ultimately lead
                  me in to pursuing software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
