import React, { useState } from "react";
import Contact from "../../components/Home/Contact";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import Hero from "../../components/Home/Hero";
import Projects from "../../components/Home/Projects";
import Projects2 from "../../components/Home/Projects2";
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
        {/* <Projects title="Projects" id="projects"/> */}
        <Projects2 />
        <Tools />
        <Contact />
      </main>

      {/* <Content title="Languages and Tools" id="languages-and-tools"/> */}

      <Footer />

      <SideNavBar />
    </div>
  );
};

export default Home;
