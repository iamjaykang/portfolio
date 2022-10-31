import React, { useState } from "react";
import { Link } from "react-scroll";
import DarkModeSwitcher from "./DarkModeSwitcher";
import pdf from "../../assets/documents/Resume-Jay-Kang.pdf";

const Header = ({ setDarkMode, darkMode }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const links = [
    {
      title: "Home",
      to: "home",
    },
    {
      title: "Projects",
      to: "projects",
    },
    {
      title: "Tools",
      to: "tools",
    },
    {
      title: "Contact",
      to: "contact",
    },
    {
      title: "Resume",
      to: pdf,
      download: true,
    },
  ];

  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-neutral-900">
      <div className="flex mx-auto max-w-screen-xl">
        <div className="items-start">
          <a href="/" className="flex items-center">
            <span className="self-center text-3xl hover:text-sky-600 font-semibold whitespace-nowrap dark:text-white hover:dark:text-sky-700">
              Jay.Kang
            </span>
          </a>
        </div>
        <div className="flex items-center ml-auto lg:order-2 lg:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className={"w-6 h-6" + (!navbarOpen ? " " : " hidden")}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className={"w-6 h-6" + (navbarOpen ? " " : " hidden")}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:ml-auto lg:flex lg:w-auto lg:order-1" +
            (!navbarOpen ? " hidden" : " flex")
          }
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 text-lg font-medium lg:flex-row lg:space-x-8 md:my-auto">
            {links.map((link, i) => (
              <li key={i}>
                {link.title != "Resume" ? (
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    download={link.download && link.download}
                    offset={link.to != "home" ? -50 : 0}
                    className="block font-bold text-right py-2 pr-4 pl-3 mx-auto text-black hover:text-sky-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent cursor-pointer lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-sky-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <a
                    href={link.to}
                    className="block font-bold text-right py-2 pr-4 pl-3 mx-auto text-black hover:text-sky-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent cursor-pointer lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-sky-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    download={link.download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.title}
                  </a>
                )}
              </li>
            ))}
            <li className="md:ml-auto md:mt-2 sm:mr-4 lg:my-auto">
              <DarkModeSwitcher setDarkMode={setDarkMode} darkMode={darkMode} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
