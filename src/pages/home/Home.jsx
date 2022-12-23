import React from "react";
import About from "../../components/home/About";
import Contact from "../../components/home/Contact";
import Footer from "../../components/home/Footer";
import Header from "../../components/home/Header";
import Hero from "../../components/home/Hero";
import Projects from "../../components/home/Projects";
import SideNavBar from "../../components/home/SideNavbar";
import Tools from "../../components/home/Tools";

const Home = ({setDarkMode,darkMode}) => {
  return (
    <div
      className="scroll-smooth flex flex-col justify-between"
    >
      <header className="sticky top-0 z-50">
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      </header>
      <main className="min-h-screen">
        <Hero />
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
