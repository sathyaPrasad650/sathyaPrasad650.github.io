import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const RouterLink = (to, name) => {
  return (
    <div>
      <Link to={to}>
        <CustomButton title={name} />
      </Link>
    </div>
  );
};

export default RouterLink;
