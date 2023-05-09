import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="title">CATEGORIES</div>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to={`/category/${1}`}>Link</NavLink>
          </li>
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
