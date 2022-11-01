import React from "react";

const Tools = () => {
  const tools = [
    {
      backend: ["NodeJS", "ExpressJS", "MongoDB", "MySQL", "Redis"],
      frontend: [
        "ReactJS",
        "Redux",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Material UI",
      ],
      other: [
        "JavaScript",
        "TypeScript",
        "Azure DevOps",
        "Machine Learning",
        "Docker",
      ],
    },
  ];

  return (
    <section
      name="tools"
      className="bg-white lg:h-screen dark:bg-neutral-900 relative"
    >
      <div className="p-4 mx-auto max-w-screen-xl lg:p-4">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-16 text-3xl lg:text-5xl font-bold text-sky-600 dark:text-sky-700">
            Tools
          </h2>
        </div>
        <div className="lg:ml-28">
          <p className="text-xl lg:text-3xl my-8 text-black dark:text-gray-400">
            Here are some of my favorite tools right now
          </p>
        </div>
        {tools &&
          tools.map((tool, i) => (
            <div className="flex flex-col lg:flex-row justify-around">
              <div>
                <h3 className="text-xl lg:text-3xl mb-4 text-sky-600 font-bold dark:text-sky-700">
                  Back-End Technology
                </h3>
                <div>
                  {tool.backend &&
                    tool.backend.map((item) => (
                      <ul>
                        <li className="mb-4 font-bold text-base lg:text-xl dark:text-white">
                          {item}
                        </li>
                      </ul>
                    ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl lg:text-3xl mb-4 text-sky-600 font-bold dark:text-sky-700">
                  Front-End Technology
                </h3>
                <div>
                  {tool.frontend &&
                    tool.frontend.map((item) => (
                      <ul>
                        <li className="mb-4 font-bold text-base lg:text-xl dark:text-white">
                          {item}
                        </li>
                      </ul>
                    ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl lg:text-3xl mb-4 text-sky-600 dark:text-sky-700 font-bold">
                  Other
                </h3>
                <div>
                  {tool.other &&
                    tool.other.map((item) => (
                      <ul>
                        <li className="mb-4 text-base lg:text-xl font-bold dark:text-white">
                          {item}
                        </li>
                      </ul>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Tools;
