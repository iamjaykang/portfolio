import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="bg-white dark:bg-neutral-900 relative lg:min-h-screen"
    >
      <div className="p-4 mx-auto max-w-screen-xl lg:p-4">
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-16 text-4xl lg:text-5xl font-bold text-sky-600 dark:text-sky-700">
            About
          </h2>
        </div>
        <div className="max-w-screen-lg mx-auto grid grid-rows-1 gap-6 w-full h-full text-white dark:text-gray-500">
          <div className="mb-2">
            <p className="text-black dark:text-white text-xl lg:text-3xl">
              I am a full-stack developer, I jumped into the field of
              programming at the start of 2022, where I have since created
              personal projects and collaborated with others through Mission
              Ready HQ.
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
              At the end of September, 2022. I went on to join Revived Design as
              an Intern Software Developer, where I learnt a new language
              (flutter) and got to further hone my skills in testing and DevOps
              and the skills such as source control, even though there were
              challenges to begin with, I am glad that I overcame a lot of the
              obstacles by working closely with my mentor and through
              researching on possible solutions.
            </p>
            <h3 className="mb-4 text-xl lg:text-3xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
              Mission Ready HQ
            </h3>
            <h4 className="mb-2 text-black dark:text-white text-lg font-bold lg:text-xl">
              2022
            </h4>
            <p className="mb-6 text-black dark:text-white text-lg lg:text-xl">
              I joined Mission Ready HQ. where I got to experience working with
              other developers and UX designers and also got to learn and hone
              my skills on the tech stack and tools that are currently being
              used in the industry and practise being an agile developer.
            </p>
            <h3 className="mb-4 text-xl lg:text-3xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
              Prior Store
            </h3>
            <h4 className="mb-2 text-black dark:text-white text-lg font-bold lg:text-xl">
              2016-2022
            </h4>
            <p className="mb-6 text-black dark:text-white text-lg lg:text-xl">
              I co-founded this business with my brother, and during the process
              of running the business, I was involved in finding and
              implementing solutions for things such as customer retention, and
              staff management. I also frequently customised our Shopify website
              depending on our needs, and as I got more intrigued with tech, it
              led me to pursue becoming a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
