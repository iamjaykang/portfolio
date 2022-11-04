import React from "react";
import About from "../../components/Home/About";
import Contact from "../../components/Home/Contact";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import Hero from "../../components/Home/Hero";
import Projects from "../../components/Home/Projects";
import SideNavBar from "../../components/Home/SideNavbar";
import Tools from "../../components/Home/Tools";

const Home = ({setDarkMode,darkMode}) => {
  return (
    <div
      className="scroll-smooth flex flex-col justify-between"
    >
      <header className="sticky top-0 z-50">
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      </header>
      <main className="">
        <Hero />
        <Projects />
        <Tools />
        <About />
        <Contact />
      </main>
      <SideNavBar />
      <footer className="p-4 bg-white text-center shadow md:flex items-center justify-center md:p-6 dark:bg-neutral-900">
      <Footer />
      </footer>
    </div>
  );
};

export default Home;
