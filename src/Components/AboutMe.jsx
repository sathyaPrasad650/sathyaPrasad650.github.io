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
          <p>I am a Full Stack Web-Developer</p>
          <p>
            My field of Interest's are building new Web Technologies and
            Products
          </p>
          <p>
            I love to work on exciting projects that test what I've learnt, also
            looking forward to work in a challenging environment which gives me
            an opportunity to prove myself & provides me with an atmosphere in
            which I can learn & grow with the company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
