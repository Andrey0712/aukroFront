import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";

import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/Auction.svg";
import AVATAR from "../../images/avatar.jpg";

const Header = () => {
  return (
    <div className="headerHead">
      <div className="logoheder">
        <Link to={ROUTES.HOUME}>
          <img className="logoImg" src={LOGO} alt="Auction" />
        </Link>
      </div>

      <div className="infoheder">
        <div className="userheder">
          <div
            className="avatarheder"
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className="usernameheder">guest</div>
        </div>

        <form className="formheder">
          <div className="iconheder">
            <svg className="iconheder">
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
