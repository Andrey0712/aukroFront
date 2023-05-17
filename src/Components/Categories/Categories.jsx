import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = ({ title, categories = [], amount }) => {
  const list = categories.filter((_, i) => i < amount);
  return (
    <section className="sectionCategories">
      <h2>{title}</h2>

      <div className="listCategories">
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id} className="itemCategories">
            <div
              className="imageCategories"
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className="titelCategories">{name}</h3>
          </Link>
        ))}
      </div>

      {/* <div className="listCategories">
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id} className="itemCategories">
            <div className="imageCategories">
              style={{ backgroundImage: `url(${image})` }}
            </div>
            <h3 className="titelCategories">{name}</h3>
          </Link>
        ))}
      </div> */}
    </section>
  );
};

export default Categories;
