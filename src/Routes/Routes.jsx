import React from "react";
import { Route, Routes } from "react-router-dom";
import Houme from "../Components/Houme/Houme";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Houme />} />
    </Routes>
  );
};
export default AppRoutes;
