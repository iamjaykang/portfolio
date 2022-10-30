import React from "react";

const Projects = ({ title }) => {
  const projects = [
    {
      name: "CRM Ticket System",
      img: "https://camo.githubusercontent.com/f81356127abd295c7847e53d7dd4ea7def748e17608a6a793d9f07f351d50652/68747470733a2f2f692e6962622e636f2f784a79465650532f43524d2d66756c6c2d737461636b2d617070322e706e67",
      stack: {},
      live: "https://crudcrm-ticket-system.herokuapp.com/",
      code: "https://github.com/jaykang95/crm-ticket-system",
    },
    {
      name: "Pbtech Project",
      img: "https://camo.githubusercontent.com/155c377088fa653c76753a430915bddd5fba281f1de1d3f6575b29ffe78589a3/68747470733a2f2f692e6962622e636f2f4a7a713250384e2f53637265656e2d53686f742d323032322d30392d32382d61742d322d35312d35342d414d2e706e67",
      stack: {},
      live: "",
      code: "https://github.com/jaykang95/pbtech-project",
    },
    {
      name: "Turners Insurance App",
      img: "https://camo.githubusercontent.com/d83f03df67619d8b88bea75c1a7ffb746a518e45ad3af066de801f0c68ce4093/68747470733a2f2f692e6962622e636f2f3432375257566e2f53637265656e2d53686f742d323032322d30392d30382d61742d392d33322d34342d504d2e706e67",
      stack: {},
      live: "https://timely-heliotrope-4a4175.netlify.app/",
      code: "https://github.com/jaykang95/turners-insurance",
    },
    {
      name: "Food Recipe App",
      img: "https://camo.githubusercontent.com/8fa3e5383cdba4d1926897c7c854703ee3f6bfb37e0e3da01254fa1fdab66985/68747470733a2f2f692e6962622e636f2f48544b354337382f53637265656e2d53686f742d323032322d31302d30342d61742d392d31392d30342d504d2e706e67",
      stack: {},
      live: "",
      code: "",
    },
  ];
  return (
    <section name="projects" className="bg-white dark:bg-gray-900">
      <div className="p-4 mx-auto max-w-screen-xl lg:p-6">
        <div className="max-w-screen-sm text-left lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 grid-rows-4">
          {projects.map((project, i) => (
            <article
              key={i}
              className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
            >
              <div>
                <h2 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
                  {project.name}
                </h2>
              </div>
              <div className="flex justify-between items-center mb-2">
                <img
                  className="mx-auto rounded-md w-full h-full"
                  src={project.img}
                />
              </div>
              <div className="flex flex-col">
                <p className="mb-5 font-medium text-center text-gray-500 dark:text-gray-400">
                  Tech stack
                </p>
                <h2 className="mb-5 font-medium text-gray-500 dark:text-gray-400 text-center">
                  See it in action
                </h2>
                <div className="flex justify-around items-center">
                  <a
                    href={project.live}
                    target="_blank"
                    className={
                      "inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline" +
                      (project.live ? " " : " hidden")
                    }
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
