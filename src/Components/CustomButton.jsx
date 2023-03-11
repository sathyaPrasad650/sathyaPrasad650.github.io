import React from "react";
// import buttonStyle from "../Styles/button.module.css";
import buttonStyle from "../Styles/CustomButton.module.css";

const CustomButton = ({ title }) => {
  return (
    <div className={buttonStyle.div}>
      <button className={buttonStyle.click}>{title}</button>
    </div>
  );
};

export default CustomButton;
