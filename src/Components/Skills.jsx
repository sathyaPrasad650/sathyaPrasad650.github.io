import React from "react";
import IconTemplate from "./IconTemplate";
import skillStyle from "../Styles/Skills.module.css";

const Skills = () => {
  return (
    <div name="skills" className={skillStyle.skills}>
      <p className={skillStyle.title}>SKILLS & TOOLS</p>
      <div className={skillStyle.container}>
        <IconTemplate
          name="html5"
          width={"62%"}
          src={"./images/icons/html5.png"}
        />
        <IconTemplate
          name="css3"
          width={"62%"}
          src={"./images/icons/css3.png"}
        />
        <IconTemplate
          name="javaScript"
          width={"60%"}
          src={"./images/icons/javaScript.png"}
        />
        <IconTemplate
          name="postMan"
          width={"65%"}
          src={"./images/icons/postMan.png"}
        />
        <IconTemplate
          name="nodeJs"
          width={"60%"}
          src={"./images/icons/nodeJs.png"}
        />
        <IconTemplate
          name="react"
          width={"68%"}
          src={"./images/icons/react.png"}
        />
        <IconTemplate
          name="bootStrap"
          width={"70%"}
          src={"./images/icons/bootStrap.png"}
        />
        <IconTemplate
          name="netlify"
          width={"68%"}
          src={"./images/icons/netlify.png"}
        />
        <IconTemplate
          name="heroku"
          width={"60%"}
          src={"./images/icons/heroku.png"}
        />
        <IconTemplate
          name="mongoDb"
          width={"63%"}
          src={"./images/icons/mongoDb.png"}
        />
        <IconTemplate
          name="github"
          width={"65%"}
          src={"./images/icons/github.png"}
        />
        <IconTemplate
          name="chakraUi"
          width={"62%"}
          src={"./images/icons/chakraUi.png"}
        />
        <IconTemplate
          name="replit"
          width={"68%"}
          src={"./images/icons/replit.png"}
        />
        <IconTemplate
          name="redux"
          width={"62%"}
          src={"./images/icons/redux.png"}
        />
        <IconTemplate name="git" width={"62%"} src={"./images/icons/git.png"} />
        <IconTemplate name="npm" width={"63%"} src={"./images/icons/npm.png"} />
        <IconTemplate
          name="vsCode"
          width={"58%"}
          src={"./images/icons/vsCode.png"}
        />
        <IconTemplate
          name="vercel"
          width={"58%"}
          src={"./images/icons/vercel.png"}
        />
      </div>
    </div>
  );
};

export default Skills;
