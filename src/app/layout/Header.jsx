import React from "react";
import pdf from "../../assets/documents/jayKangCv.pdf";
import MobileNavbar from "./MobileNavbar";
import NavBar from "./NavBar";

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
    title: "About",
    to: "about",
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

const Header = (props) => {
  const { setDarkMode, darkMode, navRef, handleClickOutside, navbarOpen, setNavbarOpen } = props;
  
  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-neutral-900">
      <div className="flex mx-auto max-w-screen-xl">
        <div className="items-start">
          <a href="/" className="flex items-center">
            <span className="hidden lg:block self-center text-3xl hover:text-sky-600 font-semibold whitespace-nowrap dark:text-white hover:dark:text-sky-700">
              Jay.Kang
            </span>
            <span className="lg:hidden self-center text-3xl hover:text-sky-600 font-semibold whitespace-nowrap dark:text-white hover:dark:text-sky-700">
              J.K
            </span>
          </a>
        </div>
        <div className="flex items-center ml-auto lg:order-2 lg:hidden">
          <button
          ref={navRef}
            type="button"
            className="inline-flex z-50 items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className={"w-6 h-6" + (!navbarOpen ? " " : " hidden")}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={"w-6 h-6" + (navbarOpen ? " " : " hidden")}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={
            "w-4/6 lg:ml-auto lg:flex lg:w-auto lg:order-1" +
            (!navbarOpen
              ? " hidden"
              : "bg-white dark:bg-neutral-900 w-full flex absolute opacity-80 right-0 h-screen")
          }
        >
          <NavBar
            links={links}
            navbarOpen={navbarOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <MobileNavbar
            navRef={navRef}
            handleClickOutside={handleClickOutside}
            links={links}
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
