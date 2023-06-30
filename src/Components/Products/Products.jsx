import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
//import Lots from "../../images/Lots.svg";

const Products = ({ title, style = {}, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className="productsPR" style={style}>
      {title && <h2>{title}</h2>}
      {/* <div className="logoheder">
        <img className="logoImg" src={Lots} alt={title} />
      </div> */}

      <div className="listPR">
        {list.map(({ id, images, title, category: { name: cat }, price }) => (
          <Link to={`/products/${id}`} key={id} className="productPR">
            <div
              className="imagePR"
              style={{ backgroundImage: `url(${images[0]})` }}
            />

            <div className="wrapperPR">
              <h3 className="titlePR">{title}</h3>
              <div className="catPR">{cat}</div>
              <div className="infoPR">
                <div className="pricesPR">
                  <div className="pricePR">{price}$</div>
                  <div className="oldPricePR">{Math.floor(price * 0.8)}$</div>
                </div>

                <div className="purchasesPR">
                  {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
