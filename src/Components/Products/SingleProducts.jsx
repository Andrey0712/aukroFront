import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";
import Products from "./Products";
import { useGetProductQuery } from "../../features/api/apiSlice";

import { getRelatedProducts } from "../../features/products/productsSlice";

const SingleProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { list, related } = useSelector(({ products }) => products);
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  //console.log(data);
  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOUME);
    }
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (
      !data
      //||       !list.lenght
    )
      return;
    dispatch(getRelatedProducts(data.category.id));
  }, [
    data,
    dispatch,
    //, list.lenght
  ]);

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Схожі лоти" />
    </>
  );
};

export default SingleProducts;
