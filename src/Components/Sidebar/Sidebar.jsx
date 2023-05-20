//import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import "./Sidebar.css";
import "./Sidebar.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);
  console.log("list", list);

  // const [values, setValues] = useState();
  // const lenght = true;
  // useEffect(() => {
  //   if (!list.lenght > 3) return;
  //   setValues(lenght);
  // }, [list.lenght]);

  // console.log(lenght);
  return (
    <section className="sidebar">
      <div className="title">CATEGORIES</div>
      <nav>
        <ul className="menu">
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink className="link" to={`/categories/${id}`}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer">
        <a href="/help" target="_blank" className="link">
          HELP
        </a>
        <a
          href="/terms"
          target="_blank"
          className="link"
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
