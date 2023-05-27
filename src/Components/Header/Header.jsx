import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";

import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/Auction.svg";
import AVATAR from "../../images/avatar.jpg";
import { toggleForm } from "../../features/user/userSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, cart } = useSelector(({ user }) => user);

  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading } = useGetProductsQuery({ title: searchValue });
  //console.log(data);
  const [values, setValues] = useState({ name: "NoName", avatar: AVATAR });

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <div className="headerHead">
      <div className="logoheder">
        <Link to={ROUTES.HOUME}>
          <img className="logoImg" src={LOGO} alt="Auction" />
        </Link>
      </div>

      <div className="infoheder">
        <div className="userheder" onClick={handleClick}>
          <div
            className="avatarheder"
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className="usernameheder">{values.name}</div>
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
              onChange={handleSearch}
              value={searchValue}
            />
          </div>

          {searchValue && (
            <div className="boxheder">
              {isLoading
                ? "Loading"
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className="itemheder"
                        to={`/products/${id}`}
                      >
                        <div
                          className="imageheder"
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className="titleheder">{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>

        <div className="account">
          <Link to={ROUTES.HOUME} className="favourites">
            <svg className={["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>

          <Link to={ROUTES.CART} className="cartHeder">
            <svg className={["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            {!!cart.length && <span className="count">{cart.length}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
