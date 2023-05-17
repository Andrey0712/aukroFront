import React, { useEffect } from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import { filterByPrice } from "../../features/products/productsSlice";

const Houme = () => {
  const filterPrice = 100;
  const filterPricestring = `Лоти до ${filterPrice} грн`;
  const dispatch = useDispatch();
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);

  useEffect(() => {
    if (!list.length) return;
    dispatch(filterByPrice(filterPrice));
  }, [dispatch, list.length]);
  return (
    <>
      <Poster />

      <Products products={list} amount={5} title="Лоти" />
      <Categories categories={categories.list} amount={5} title="Категорії" />
      <Products products={filtered} amount={20} title={filterPricestring} />
    </>
  );
};

export default Houme;
