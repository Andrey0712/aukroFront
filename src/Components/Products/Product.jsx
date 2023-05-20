import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { addItemToCart } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

const Product = (item) => {
  const { title, price, images, description } = item;
  //const currentImage = images[0];
  const dispatch = useDispatch();

  const [currentImage, setCurrentImages] = useState();

  useEffect(() => {
    if (!images.length) return;
    setCurrentImages(images[0]);
  }, [images]);
  //console.log({ title });
  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

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
              onClick={() => setCurrentImages(image)}
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
          <button onClick={addToCart} className="addPr">
            Add to cart
          </button>
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
