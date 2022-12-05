import React from "react";
import projectTempStyle from "../Styles/ProjectTemplate.module.css";

const ProjectTemplate = ({
  img,
  title,
  description,
  techStacks,
  githubLink,
  deployLink,
}) => {
  return (
    <div className={projectTempStyle.project}>
      {/* image */}
      <div className={projectTempStyle.imgDiv}>
        <img src={img} alt="" />
      </div>
      {/* title */}
      <div className={projectTempStyle.titleDiv}>
        <p>{title}</p>
      </div>
      {/* description */}
      <div className={projectTempStyle.descriptionDiv}>
        <p>{description}</p>
      </div>
      {/* tech stacks */}
      <div className={projectTempStyle.techStacksDiv}>
        <p>{techStacks}</p>
      </div>
      {/* links */}
      <div className={projectTempStyle.btnDiv}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className={projectTempStyle.btnGit}>
            <img src="./images/projects/github.png" alt="" />
            GitHub
          </button>
        </a>
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          <button className={projectTempStyle.btnLink}>
            <img src="./images/projects/link.png" alt="" /> Deployed Link
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectTemplate;

/*
.downloadBtn {
    height: 35px;
    border-radius: 50px;
    padding-right: 15px;
    padding-left: 15px;
    color: white;
    width: 300px;
    font-size: 20px;
    background-color: #0071e3;
  }
.downloadBtn:hover {
    background: #0c86ff;
  }

*/
