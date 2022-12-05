import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import projectStyle from "../Styles/Project.module.css";

const Projects = () => {
  return (
    <div name="projects" className={projectStyle.projects}>
      <p className={projectStyle.title}>PROJECTS</p>
      {/* project1 */}
      <div className={projectStyle.project1}>
        <ProjectTemplate
          img={"./images/projects/project1.png"}
          title={"Bella Vita Organic Clone"}
          description={
            "An E-Commerce website that sells Natural & Ayurvedic Beauty Care Products. Rapid Delivery. Ayurveda Certified. Shop Authentic & Luxury Face, Body, Hair, & Beauty Care Products."
          }
          techStacks={"HTML | CSS | JavaScript"}
          githubLink="https://deft-toffee-252251.netlify.app/"
          deployLink="https://github.com/sathyaPrasad650/Bella-Vita-Organic-Clone"
        />
      </div>
      {/* project2 */}
      <div className={projectStyle.project1}>
        {" "}
        <ProjectTemplate
          img={"./images/projects/project2.png"}
          title={"Bewakoof Clone"}
          description={
            "It is an online Shopping site for Men and Women's Clothing. Shop from a wide range of T-shirts, Mobile Covers."
          }
          techStacks={"HTML | CSS | JavaScript"}
          githubLink="https://github.com/Vijay-Prakash146246/Bewakoof.com"
          deployLink="https://clinquant-gingersnap-fd08a8.netlify.app"
        />
      </div>
      {/* project3 */}
      <div className={projectStyle.project1}>
        {" "}
        <ProjectTemplate
          img={"./images/projects/project3.png"}
          title={"Urban Company "}
          description={
            "Urban Company is your one-stop destination for expert local services. Get dozens of trusted professionals near you to take care of all your home and beauty services."
          }
          techStacks={"HTML | CSS | JavaScript"}
          githubLink="https://github.com/sathyaPrasad650/peachy-hobbies-6858/tree/master/urban-company-sathya"
          deployLink="https://urban-company-sathya.netlify.app"
        />
      </div>
    </div>
  );
};

export default Projects;
