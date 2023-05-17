import React from "react";
import { Route, Routes } from "react-router-dom";
import Houme from "../Components/Houme/Houme";
import { ROUTES } from "../utils/routes";
import SingleProducts from "../Components/Products/SingleProducts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Houme />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProducts />} />
    </Routes>
  );
};
export default AppRoutes;
