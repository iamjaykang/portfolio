import React from "react";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import Hero from "../../components/Home/Hero";
import Projects from "../../components/Home/Projects";
import Projects2 from "../../components/Home/Projects2";
import SideNavBar from "../../components/Home/SideNavbar";

const Home = () => {
  return (
    <div className="scroll-smooth flex flex-col h-screen justify-between">
      <Header />
      <Hero />
      {/* <Projects title="Projects" id="projects"/> */}
      <Projects2 />

      {/* <Content title="Languages and Tools" id="languages-and-tools"/> */}

      <Footer />

      <SideNavBar />
    </div>
  );
};

export default Home;
