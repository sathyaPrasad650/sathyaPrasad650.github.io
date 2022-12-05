import React from "react";
import homeStyle from "../Styles/Home.module.css";

const Home = () => {
  return (
    <div name="home" className={homeStyle.home}>
      <div className={homeStyle.name}>
        <p>Sathya</p>
        <p>Prasad S</p>
      </div>
      <div className={homeStyle.course}>
        <p>Full Stack</p>
        <p>Web-Developer</p>
      </div>
    </div>
  );
};

export default Home;
