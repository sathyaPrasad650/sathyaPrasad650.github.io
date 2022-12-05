import React from "react";
import buttonStyle from "../Styles/button.module.css";

const CustomButton = ({ title }) => {
  return (
    <div>
      <button
        className={buttonStyle.click}
        style={{
          height: "25px",
          borderRadius: "50px",
          // paddingTop: "15px",
          // paddingBottom: "15px",
          paddingRight: "15px",
          paddingLeft: "15px",
          color: "white",
          width: "95px",
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
