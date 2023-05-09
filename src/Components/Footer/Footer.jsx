import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/Auction.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="logo">
        <Link to={ROUTES.HOUME}>
          <img src={LOGO} alt="AUCTION" />
        </Link>
      </div>
      <div className="rigrts">Всі права захищено</div>

      <div className="socials">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
