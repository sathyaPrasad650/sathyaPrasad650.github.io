import React from "react";
import aboutStyle from "../Styles/About.module.css";

const AboutMe = () => {
  return (
    <div name="about" className={aboutStyle.about}>
      <p className={aboutStyle.title}>ABOUT ME</p>
      <div className={aboutStyle.content}>
        <div className={aboutStyle.imageDiv}>
          <img src="./images/profilePicture.png" alt="profilePicture" />
        </div>
        <div className={aboutStyle.intro}>
          <p>I am a Tech Support Engineer</p>
          <p>
            Motivated and detail-oriented technology enthusiast seeking a
            position as a tech support engineer.
          </p>
          <p>
            Possessing a strong passion for problem-solving and a commitment to
            providing exceptional customer service. Confident in my ability to
            effectively support customers and resolve complex technical
            problems. Eager to bring my skills, knowledge, and enthusiasm to an
            organization that values hard work, innovation and teamwork.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
