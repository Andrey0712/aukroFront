import React from "react";
//import "../../Components/Houme/Home.css";
import BG from "../../images/marka.jpg";
import "./Poster.css";

const Poster = () => {
  return (
    <>
      <section className="homeP">
        <div className="titleP">BIG SALE 20%</div>
        <div className="productP">
          <div className="textP">
            <div className="subtitleP">the bestseller of 2022</div>
            <h1 className="headP">LENNON r2d2 with NVIDIA 5090 TI</h1>
            <button className="button">Shop Now</button>
          </div>
          <div className="imageP">
            <img src={BG} alt="no foto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Poster;
