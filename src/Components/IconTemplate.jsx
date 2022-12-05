import React from "react";
import iconTempStyle from "../Styles/IconTemplate.module.css";

const IconTemplate = ({ name, width, src }) => {
  return (
    <div className={iconTempStyle.iconTemp}>
      <div>
        <img width={width} src={src} alt={name} />
      </div>
    </div>
  );
};

export default IconTemplate;
