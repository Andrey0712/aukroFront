import React from "react";
import { Route, Routes } from "react-router-dom";
import Houme from "../Components/Houme/Houme";
import { ROUTES } from "../utils/routes";
import SingleProducts from "../Components/Products/SingleProducts";
import Profile from "../Components/Profile/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Houme />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProducts />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
    </Routes>
  );
};
export default AppRoutes;
