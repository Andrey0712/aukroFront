import React, { useEffect } from "react";
import AppRoutes from "../../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import NoPage from "../NoPage/NoPage";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { getCategories } from "../../features/categories/categoriesSlice";
import { getProducts } from "../../features/products/productsSlice";
import UserForm from "../user/UserForm";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      {/* <NoPage /> */}
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};

export default App;
