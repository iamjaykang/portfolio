import React from "react";

const projects = [
  {
    name: "Healthright E-commerce Website",
    img: require('../../../assets/images/healthright.png'),
    description:
      "This project is an e-commerce website built using React JS, Firebase, styled with SCSS, and state management by Redux. The website allows users to browse and purchase products, as well as manage their shopping carts. The project also integrates with Google Dialogflow for conversational user experience.",
    stacks: [
      "React",
      "JavaScript",
      "Google Dialogflow",
      "SCSS",
      "Redux",
      "Firebase",
      "React Router",
    ],
    live: "https://dynamic-wisp-ef7e88.netlify.app",
    code: "https://github.com/iamjaykang/healthright",
  },
  {
    name: "Revents App",
    img: require('../../../assets/images/revents.png'),
    description:
      "A full-stack event management application built with React, TypeScript, .NET, MobX, PostgresQL and deployed with Docker, featuring live chats and social media functionality.",
    stacks: [
      "React",
      "Semantic UI",
      "Axios",
      "TypeScript",
      "SignalR",
      "PostGresQL",
      ".NET",
      "JWT",
      "MobX",
      "Docker",
      "Cloudinary",
      "React Router",
      "AutoMapper",
      "fly.io",
      "Github Actions",
      "MediatR",
    ],
    live: "https://revents.fly.dev",
    code: "https://github.com/iamjaykang/Revents-App",
  },
  {
    name: "CRM Ticket System",
    img: require('../../../assets/images/ticket.png'),
    description:
      "A MERN stack-based customer support and ticket management system, featuring client and admin portals, sign-up with OTP and dashboard, user validation, and the ability to add and update existing and new tickets, state management through Redux and hosted on free-tier Render.com with some loading time due to free plan limitations.",
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
    live: "https://crudcrm-ticket.online",
    code: "https://github.com/iamjaykang/crm-ticket-system",
  },
  {
    name: "Portfolio Website",
    img: require('../../../assets/images/portfolio.png'),
    description:
      "A React JS and Tailwind CSS based website, designed with smooth scrolling to sections via the Navbar, dark & light themes with mobile responsiveness and desktop view and hosted on a custom domain through Netlify.",
    stacks: ["React", "JavaScript", "Netlify", "Tailwind CSS", "Jest"],
    live: "https://jaykang.info",
    code: "https://github.com/iamjaykang/portfolio",
  },
];
const Projects = () => {
  return (
    <section
      name="projects"
      className="bg-white dark:bg-neutral-900 relative lg:min-h-screen"
    >
      <div className="p-4 mx-auto max-w-screen-xl lg:p-4">
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-16 text-4xl lg:text-5xl font-bold text-sky-600 dark:text-sky-700">
            Projects
          </h2>
          <div className="max-w-screen-lg mx-auto">
            {projects.map((project, i) => (
              <div key={i} className="mb-20">
                <div className="grid grid-rows-1 gap-6 w-full h-full">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      className="object-cover w-full h-full"
                      src={project.img}
                      alt={project.name}
                    />
                    <div className="absolute opacity-0 duration-300 top-0 left-0 px-6 py-4 bg-black w-full h-full hover:opacity-80 flex justify-center items-center flex-col">
                      <h2 className="mb-3 text-base xs:text-2xl md:text-4xl font-semibold tracking-tight text-white">
                        {project.name}
                      </h2>
                      <p className="leading-normal text-center text-xs xs:text-xl md:text-3xl text-gray-100">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="my-6 font-bold text-xl lg:text-3xl">
                    Tech Stack
                  </h4>
                  <div className="my-6 flex-wrap flex justify-items-start gap-3">
                    {project.stacks &&
                      project.stacks.map((stack) => (
                        <div
                          key={stack}
                          className="text-center text-base lg:text-xl py-[0.1rem] px-4 bg-black text-white dark:bg-white dark:text-black rounded-sm font-bold"
                        >
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
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={project.code}
                    className="inline-flex text-lg lg:text-2xl items-center font-bold text-primary-600 hover:text-cyan-600 hover:dark:text-sky-700 dark:text-primary-500 dark:hover:text-primary-700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
