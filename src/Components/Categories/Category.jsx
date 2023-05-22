import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import "./Categories.css";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);
  const defaultValues = {
    title: "",
    price_min: "",
    price_max: "",
  };
  const defaultParams = {
    categoryId: id,
    ...defaultValues,
  };

  const [cat, setCat] = useState();
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    if (!id) return;

    setParams({ ...defaultParams, categoryId: id });
  }, [id]);

  useEffect(() => {
    if (!id || !list.length) return;
    const category = list.find((item) => item.id === id * 1);

    setCat(category);
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParams({ ...params, ...values });
  };

  //const { data } = useGetProductsQuery({ categoryId: id });
  const { data, isLoading, isSuccess } = useGetProductsQuery(params);
  console.log(data);
  return (
    <section className="wrapperCategories">
      <h2 className="title">{cat?.name}</h2>
      <form className="filtersCategories" onSubmit={handleSubmit}>
        <div className="filterCategories">
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Product name"
            value={values.title}
          />
        </div>
        <div className="filterCategories">
          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="0"
            value={values.price_min}
          />
          <span>Price from</span>
        </div>
        <div className="filterCategories">
          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="0"
            value={values.price_max}
          />
          <span>Price to</span>
        </div>

        <button type="submit" hidden />
      </form>

      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || !data.length ? (
        <div className="backCategories">
          <span>No rezalt</span>
          <button onClick={""}>RESET</button>
        </div>
      ) : (
        <Products
          title=""
          products={data}
          style={{ padding: 0 }}
          amount={data.length}
        />
      )}
    </section>
  );
};

export default Category;
