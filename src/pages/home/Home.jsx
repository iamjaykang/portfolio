import React, { useRef, useState } from "react";
import About from "../../components/home/about/About";
import Contact from "../../components/home/contact/Contact";
import Footer from "../../app/layout/Footer";
import Header from "../../app/layout/Header";
import Hero from "../../components/home/hero/Hero";
import Projects from "../../components/home/projects/Projects";
import SideNavBar from "../../app/common/sideNavbar/SideNavbar";
import Tools from "../../components/home/tools/Tools";

const Home = (props) => {
  const { setDarkMode, darkMode, isMobile } = props;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event, navRef) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNavbarOpen(false);
    }
  };
  return (
    <div
      onClick={(event) => handleClickOutside(event, navRef)}
      className="scroll-smooth flex flex-col justify-between"
    >
      <header className="sticky top-0 z-50">
        <Header
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          isMobile={isMobile}
          navRef={navRef}
          handleClickOutside={handleClickOutside}
          setNavbarOpen={setNavbarOpen}
          navbarOpen={navbarOpen}
        />
      </header>
      <main className="min-h-screen">
        <Hero isMobile={isMobile} />
        <Projects />
        <Tools />
        <About />
        <Contact />
      </main>
      <SideNavBar />
      <footer className="p-4 bg-white w-full text-center md:p-6 dark:bg-neutral-900">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
