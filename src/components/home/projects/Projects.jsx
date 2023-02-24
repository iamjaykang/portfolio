import React from "react";
import ProjectCarousel from "../../../app/common/projectCarousel/ProjectCarousel";

const projects = [
  {
    name: "Healthright E-commerce Website",
    images: [
      require("../../../assets/images/healthright.png"),
      require("../../../assets/images/healthright-2.png"),
      require("../../../assets/images/healthright-3.png"),
      require("../../../assets/images/healthright-4.png"),
      require("../../../assets/images/healthright-5.png"),
  ],
    description:
      "This project is an e-commerce website built using React JS, Node.Js, Express.Js, Firebase Auth, Postgres SQL Sequelize ORM, styled with SCSS, and state management by Redux. The website allows users to browse and purchase products, as well as manage their shopping carts. The website also has an admin route that allows authenticated users with admin privileges to perform CRUD (Create, Read, Update, Delete) operations for products and customers.",
    stacks: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Google Dialogflow",
      "Chart.js",
      "Sequelize ORM",
      "Postgres SQL",
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
    images: [
      require("../../../assets/images/revents.png"),
      require("../../../assets/images/revents-2.png"),
      require("../../../assets/images/revents-3.png"),
      require("../../../assets/images/revents-4.png"),
    ],
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
    images: [
      require("../../../assets/images/ticket.png"),
      require("../../../assets/images/ticket-2.png"),
      require("../../../assets/images/ticket-3.png"),
      require("../../../assets/images/ticket-4.png"),
  ],
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
    images: [
      require("../../../assets/images/portfolio.png"),
      require("../../../assets/images/portfolio-2.png"),
  ],
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
                    <ProjectCarousel project={project} />
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
