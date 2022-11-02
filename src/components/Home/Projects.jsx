import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "CRM Ticket System",
      img: "https://i.ibb.co/xJyFVPS/CRM-full-stack-app2.png",
      description:
        "A CRUD CRM Ticket Application built with the MERN stack, with features like dashboard, ticket query and the ability to add and update existing tickets. this app has been hosted on free tier Heroku service. *note* verification email has been fixed after updating to new domain and sender address.",
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
        "Joi",
        "Heroku",
      ],
      live: "http://crudcrm-ticket.online",
      code: "https://github.com/jaykang95/crm-ticket-system",
    },
    {
      name: "Pbtech Project",
      img: "https://camo.githubusercontent.com/155c377088fa653c76753a430915bddd5fba281f1de1d3f6575b29ffe78589a3/68747470733a2f2f692e6962622e636f2f4a7a713250384e2f53637265656e2d53686f742d323032322d30392d32382d61742d322d35312d35342d414d2e706e67",
      description:
        "MERN stack app, pulls data from MongoDB through REST API to render the selection on the modal. I utilised the quicksort algorithm to sort items, and the filter method is used with the slider.",
      stacks: ["MongoDB", "Express", "React", "Node", "Docker", "Tailwind CSS"],
      live: "",
      code: "https://github.com/jaykang95/pbtech-project",
    },
    {
      name: "Turners Insurance App",
      img: "https://camo.githubusercontent.com/d83f03df67619d8b88bea75c1a7ffb746a518e45ad3af066de801f0c68ce4093/68747470733a2f2f692e6962622e636f2f3432375257566e2f53637265656e2d53686f742d323032322d30392d30382d61742d392d33322d34342d504d2e706e67",
      description:
        "First project where I was able to work together with UX designers, we practiced the agile methodology by having daily stand ups at Mission Ready HQ, Azure DevOps was used as our CI/CD pipeline at the time of development.",
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
      description:
        "Simple recipe app I created as I couldn't think of what to cook, the feautures include search functionality and category selection, and most importantly, get 10 random meal recipes function",
      stacks: ["React", "Tailwind CSS", "Axios", "Netlify"],
      live: "https://dainty-dolphin-7819d1.netlify.app",
      code: "https://github.com/jaykang95/recipe-app",
    },
  ];
  return (
    <section name="projects" className="bg-white dark:bg-neutral-900 relative">
      <div className="p-4 mx-auto max-w-screen-xl lg:p-4">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-16 text-4xl lg:text-5xl font-bold text-sky-600 dark:text-sky-700">
            Projects
          </h2>
          {projects.map((project, i) => (
            <div key={i} className="mx-auto lg:ml-8 mb-20">
              <div className="group relative">
                <img className="w-full" src={project.img} />
                <div className="absolute flex flex-col justify-center items-center text-center top-0 left-0 w-full h-0 bg-black opacity-40 hover:opacity-80 group-hover:h-full transition hover:ease-in duration-300">
                  <h2
                    className={`"mx-auto text-base font-extrabold sm:text-2xl lg:text-4xl ${
                      project.name === "Food Recipe App" ? "top-16 sm:top-36 lg:top-72" : "top-4 sm:top-20 lg:top-56"
                    } absolute text-transparent group-hover:text-white font-bold"`}
                  >
                    {project.name}
                  </h2>
                  <p
                    className={`" text-sm sm:text-xl lg:text-2xl  px-6 ${
                      project.name === "Food Recipe App"
                        ? "top-24 sm:top-48 lg:top-[22rem]"
                        : "top-12 sm:top-32 lg:top-[17rem]"
                    } absolute text-transparent group-hover:text-white font-bold text-center"`}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="my-6 font-bold text-xl lg:text-3xl">
                  Tech Stack
                </h4>
                <div className="my-6 flex-wrap flex justify-items-start gap-3">
                  {project.stacks &&
                    project.stacks.map((stack) => (
                      <div className="text-center text-base lg:text-xl py-[0.1rem] px-4 bg-black text-white dark:bg-white dark:text-black rounded-sm font-bold">
                        {stack}
                      </div>
                    ))}
                </div>
                <h4 className="mb-6 font-bold text-xl lg:text-3xl">
                  {project.live ? "See it in action" : "See the code"}
                </h4>
              </div>
              <div className="flex gap-6">
                {project.live && (
                  <a
                    href={project.live}
                    className="inline-flex text-lg lg:text-2xl items-center font-bold text-primary-600 hover:text-cyan-600 hover:dark:text-sky-700 dark:text-primary-500 dark:hover:text-primary-700"
                    target="_blank"
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.code}
                  className="inline-flex text-lg lg:text-2xl items-center font-bold text-primary-600 hover:text-cyan-600 hover:dark:text-sky-700 dark:text-primary-500 dark:hover:text-primary-700"
                  target="_blank"
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

export default Projects;
