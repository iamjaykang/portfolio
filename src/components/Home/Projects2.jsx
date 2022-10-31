import React from "react";

const Projects2 = () => {
  const projects = [
    {
      name: "CRM Ticket System",
      img: "https://camo.githubusercontent.com/f81356127abd295c7847e53d7dd4ea7def748e17608a6a793d9f07f351d50652/68747470733a2f2f692e6962622e636f2f784a79465650532f43524d2d66756c6c2d737461636b2d617070322e706e67",
      stacks: [
        "MongoDB",
        "Express",
        "React",
        "Node",
        "Redux",
        "Redis",
        "Tailwind CSS",
        "JWT",
        "Node Mailer",
        "Heroku",
      ],
      live: "https://crudcrm-ticket-system.herokuapp.com/",
      code: "https://github.com/jaykang95/crm-ticket-system",
    },
    {
      name: "Pbtech Project",
      img: "https://camo.githubusercontent.com/155c377088fa653c76753a430915bddd5fba281f1de1d3f6575b29ffe78589a3/68747470733a2f2f692e6962622e636f2f4a7a713250384e2f53637265656e2d53686f742d323032322d30392d32382d61742d322d35312d35342d414d2e706e67",
      stacks: [
        "MongoDB",
        "Express",
        "React",
        "Node",
        "Docker",
        "Tailwind CSS",
      ],
      live: "",
      code: "https://github.com/jaykang95/pbtech-project",
    },
    {
      name: "Turners Insurance App",
      img: "https://camo.githubusercontent.com/d83f03df67619d8b88bea75c1a7ffb746a518e45ad3af066de801f0c68ce4093/68747470733a2f2f692e6962622e636f2f3432375257566e2f53637265656e2d53686f742d323032322d30392d30382d61742d392d33322d34342d504d2e706e67",
      stacks: [
        "TypeScript",
        "Azure",
        "React",
        "Azure DevOps",
        "Docker",
        "Tailwind CSS",
      ],
      live: "https://timely-heliotrope-4a4175.netlify.app/",
      code: "https://github.com/jaykang95/turners-insurance",
    },
    {
      name: "Food Recipe App",
      img: "https://camo.githubusercontent.com/8fa3e5383cdba4d1926897c7c854703ee3f6bfb37e0e3da01254fa1fdab66985/68747470733a2f2f692e6962622e636f2f48544b354337382f53637265656e2d53686f742d323032322d31302d30342d61742d392d31392d30342d504d2e706e67",
      stacks: [
        "React",
        "Tailwind CSS",
        "Axios",
        "Netlify"

      ],
      live: "https://taupe-quokka-1aa36d.netlify.app/",
      code: "https://github.com/jaykang95/recipe-app",
    },
  ];
  return (
    <section name="projects" className="bg-white dark:bg-gray-900">
      <div className="p-4 mx-auto max-w-screen-xl lg:p-4">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-8 text-4xl tracking-tight font-bold text-cyan-600 dark:text-white">
            Projects
          </h2>
          {projects.map((project, i) => (
            // console.log(project[0]);
            <div className="mb-10">
              {/* <div>
                <h3 className="mb-4 font-bold text-3xl text-gray-900 dark:text-white">
                  {project.name}
                </h3>
              </div> */}
              <div>
                <img src={project.img} />
              </div>
              <div>
                <h4 className="my-4 font-medium text-2xl">Tech Stack</h4>
                <div className="my-4 flex justify-items-start gap-6">
                  {project.stacks &&
                    project.stacks.map((stack) => (
                      <div className="">{stack}</div>
                    ))}
                </div>
                <h4 className="mb-4 font-medium text-2xl">See it in action</h4>
              </div>
              <div className="flex gap-6">
                {project.live && (
                  <a
                    href={project.live}
                    className="inline-flex text-xl items-center font-medium text-primary-600 hover:text-cyan-600 dark:text-primary-500 dark:hover:text-primary-700"
                    target='_blank'
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.code}
                  className="inline-flex text-xl items-center font-medium text-primary-600 hover:text-cyan-600 dark:text-primary-500 dark:hover:text-primary-700"
                  target='_blank'
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2;
