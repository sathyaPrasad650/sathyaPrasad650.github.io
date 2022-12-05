import React from "react";
import AboutMe from "./AboutMe";
// import Calendar from "./Calendar";
import Contact from "./Contact";
import Github from "./Github";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
  return (
    <div>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Github />
      <Contact />

      {/* <Calendar /> */}
    </div>
  );
};

export default Main;
