import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const RouterDomLink = ({ to, name }) => {
  return (
    <>
      <Link id="RouterNavLink" target="_blank" to={to}>
        <CustomButton title={name} />
      </Link>
    </>
  );
};

export default RouterDomLink;
