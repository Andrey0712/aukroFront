import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.css";

import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/Auction.svg";
import AVATAR from "../../images/avatar.jpg";
// import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";

import { toggleForm } from "../../features/user/userSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

import { useTheme } from "../hooks/use-theme";

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
  //зміна теми використовуючи хук useTheme
  const { theme, setTheme } = useTheme();
  console.log({ theme });

  const handleLightThemeClick = () => {
    setTheme("light");
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };

  // const search_submit = (searchValue) => {
  //   searchValue && (
  //     <div className="boxheder">
  //       {isLoading
  //         ? "Loading"
  //         : !data.length
  //         ? "No results"
  //         : data.map(({ title, images, id }) => {
  //             return (
  //               <Link
  //                 key={id}
  //                 onClick={() => setSearchValue("")}
  //                 className="itemheder"
  //                 to={`/products/${id}`}
  //               >
  //                 <div
  //                   className="imageheder"
  //                   style={{ backgroundImage: `url(${images[0]})` }}
  //                 />
  //                 <div className="titleheder">{title}</div>
  //               </Link>
  //             );
  //           })}
  //     </div>
  //   );
  // };

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
              placeholder="Search by name..."
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

        {theme === "light" ? (
          <button className="buttonTheme" onClick={handleDarkThemeClick}>
            Dark
          </button>
        ) : (
          <button className="buttonTheme" onClick={handleLightThemeClick}>
            Light
          </button>
        )}

        <div className="account">
          <form className="formhederMobile">
            <svg className={["icon-search"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#sistrix`} />
            </svg>
            <div className="inputMobile">
              <input
                // id="search"
                type="text"
                name="search"
                placeholder="Search by name..."
                autoComplete="off"
                onChange={handleSearch}
                value={searchValue}
              />
              <input
                id="search_submit"
                value="Rechercher"
                type="submit"
              ></input>
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
          {/* <Link to={ROUTES.HOUME} className="favourites">
            <svg className={["icon-search"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#sistrix`} />
            </svg>
          </Link> */}

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
