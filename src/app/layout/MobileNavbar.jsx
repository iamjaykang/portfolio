import React from "react";
import { Link } from "react-scroll";
import DarkModeSwitcher from "../common/darkModeSwitcher/DarkModeSwitcher";

const MobileNavbar = (props) => {
  const {
    links,
    navbarOpen,
    setNavbarOpen,
    darkMode,
    setDarkMode,
    navRef,
    handleClickOutside,
  } = props;

  const handleLinkClick = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <ul
      onClick={(event) => handleClickOutside(event, navRef)}
      className={
        "flex flex-col text-lg font-medium lg:hidden md:my-auto" +
        (navbarOpen &&
          " bg-white dark:bg-neutral-900 w-full items-end h-full justify-end absolute right-0 top-0")
      }
    >
      {links.map((link, i) => (
        <li key={i}>
          {link.title === "Resume" ? (
            <a
              href={link.to}
              className="block font-bold text-right py-2 px-6 pl-3 mx-auto text-black hover:text-sky-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent cursor-pointer lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-sky-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              download={link.download}
              target="_blank"
              rel="noreferrer"
              onClick={() => handleLinkClick()}
            >
              {link.title}
            </a>
          ) : (
            <Link
              to={link.to}
              smooth
              duration={500}
              download={link.download && link.download}
              offset={-50}
              className="block w-full font-bold text-right py-2 px-6 mx-auto text-black hover:text-sky-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent cursor-pointer lg:border-0 lg:p-0 dark:text-white lg:dark:hover:text-sky-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              onClick={() => handleLinkClick()}
            >
              {link.title}
            </Link>
          )}
        </li>
      ))}
      <li className="my-2 px-2 md:ml-auto md:mt-2 sm:mr-4 lg:my-auto mb-8 mr-4 lg:mr-0 lg:mb-0">
        <DarkModeSwitcher setDarkMode={setDarkMode} darkMode={darkMode} />
      </li>
    </ul>
  );
};

export default MobileNavbar;
