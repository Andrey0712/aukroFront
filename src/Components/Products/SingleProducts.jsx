import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";
import { useGetProductQuery } from "../../features/api/apiSlice";

const SingleProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //const { list } = useSelector(({ products }) => products);
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  console.log(data);
  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOUME);
    }
  }, [isLoading, isFetching, isSuccess]);
  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product {...data} />
      {/* <Products products={related} amount={5} title="Related products" /> */}
    </>
  );
};

export default SingleProducts;
