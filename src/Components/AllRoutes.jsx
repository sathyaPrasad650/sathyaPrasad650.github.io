import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Resume from "./Resume";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default AllRoutes;
