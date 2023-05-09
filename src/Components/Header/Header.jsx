import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";

import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/Auction.svg";
import AVATAR from "../../images/avatar.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logoheder">
        <Link to={ROUTES.HOUME}>
          <img className="logoImg" src={LOGO} alt="Auction" />
        </Link>
      </div>

      <div className="info">
        <div className="user">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className="username">guest</div>
        </div>

        <form className="form">
          <div className="icon">
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className="input">
            <input
              type="search"
              name="search"
              placeholder="Search for anyting..."
              autoComplete="off"
              onChange=""
              value=""
            />
          </div>
        </form>

        <div className="account">
          <Link to={ROUTES.HOUME} className="favourites">
            <svg className={["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>

          <Link to={ROUTES.CART} className="cart">
            <svg className={["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>

            <span className="count">2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
