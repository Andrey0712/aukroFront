import React from "react";
import { Route, Routes } from "react-router-dom";
import Houme from "../Components/Houme/Houme";
import { ROUTES } from "../utils/routes";
import SingleProducts from "../Components/Products/SingleProducts";
import Profile from "../Components/Profile/Profile";
import SingleCategory from "../Components/Categories/SingleCategory";
import Cart from "../Components/Cart/Cart";
import NoPage from "../Components/NoPage/NoPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Houme />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProducts />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.NoPage} element={<NoPage />} />
    </Routes>
  );
};
export default AppRoutes;
