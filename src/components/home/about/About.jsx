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
            Full-stack developer with experience in personal projects and collaborations with other developers through Mission Ready HQ. Recent graduate with skills in coding and testing, DevOps and Agile methodologies.
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
            Completed an internship at Revived Design as a Software Developer, where I gained experience in a new language (Flutter) and honed my skills in testing, DevOps and source control management. Worked closely with mentor to overcome obstacles and achieved improvements.
            </p>
            <h3 className="mb-4 text-xl lg:text-3xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
            Mission Ready HQ
            </h3>
            <h4 className="mb-2 text-black dark:text-white text-lg font-bold lg:text-xl">
              2022
            </h4>
            <p className="mb-6 text-black dark:text-white text-lg lg:text-xl">
            Completed a full-stack development program at Mission Ready HQ, where I gained hands-on experience in the tech stack and tools currently used in the industry, as well as Agile methodologies.
            </p>
            <h3 className="mb-4 text-xl lg:text-3xl tracking-tight font-bold text-sky-600 dark:text-sky-700">
              Prior Store
            </h3>
            <h4 className="mb-2 text-black dark:text-white text-lg font-bold lg:text-xl">
              2016-2022
            </h4>
            <p className="mb-6 text-black dark:text-white text-lg lg:text-xl">
            Co-founder of Prior Store, where I gained experience in customer retention, staff management, website customization and e-commerce, leading to my passion in the tech field and decision to become a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
