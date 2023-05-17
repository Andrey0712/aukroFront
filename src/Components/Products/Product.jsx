import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Product = ({ title, price, images, description }) => {
  const currentImage = images[0];
  //console.log({ title });
  return (
    <section className="productPr">
      <div className="imagesPr">
        <div
          className="currentPr"
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className="images-listPr">
          {images.map((image, i) => (
            <div
              key={i}
              className="imagePr"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
      <div className="infoPr">
        <p className="titlePr">{title}</p>
        <div className="pricePr">{price}грн.</div>
        {/* <div className="colorPr">
          <span>Color:</span> Green
        </div> */}
        {/* <div className="sizesPr">
          <span>Sizes:</span>
          <div className={styles.list}>
            {SIZES.map((size) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`${styles.size} ${
                  currentSize === size ? styles.active : ""
                }`}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div> */}

        <p className="descriptionPr">{description}</p>

        <div className="actionsPr">
          <button className="addPr">Add to cart</button>
          <button className="favouritePr">Add to favourite</button>
        </div>

        <div className="bottomPr">
          <div className="purchasePr">10 people purchased</div>
          <Link to={ROUTES.HOUME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
