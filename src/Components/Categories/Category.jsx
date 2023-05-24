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
    limit: 5, // amount
    offset: 0, // старт отсчета
    ...defaultValues,
  };

  const [cat, setCat] = useState();
  const [isEnd, setEnd] = useState(false); //скрівать кнопку если !products.length
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);

  console.log(params);
  const { data, isLoading, isSuccess } = useGetProductsQuery(params);
  console.log(data);

  useEffect(() => {
    if (!id) return;

    //при смене категории дефолтніе параметры
    setValues(defaultValues);
    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, categoryId: id });
  }, [id]);

  useEffect(() => {
    if (!id || !list.length) return;
    const category = list.find((item) => item.id === id * 1);

    setCat(category);
  }, [list, id]);

  useEffect(() => {
    if (isLoading) return;

    if (!data.length) return setEnd(true);
    // const products = Object.values(data);
    // if (!products.length) return;
    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, ...values });
  };

  //const { data } = useGetProductsQuery({ categoryId: id });

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
      ) : !isSuccess || !items.length ? (
        <div className="backCategories">
          <span>No rezalt</span>
          <button onClick={""}>RESET</button>
        </div>
      ) : (
        <Products
          title=""
          products={items}
          style={{ padding: 0 }}
          amount={items.length}
        />
      )}
      {!isEnd && (
        <div className="moreCategories">
          <button
            onClick={() =>
              setParams({ ...params, offset: params.offset + params.limit })
            }
          >
            See more
          </button>
        </div>
      )}
    </section>
  );
};

export default Category;
