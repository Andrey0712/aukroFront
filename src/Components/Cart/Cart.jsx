import React from "react";
import "./Cart.css";
import { sumBy } from "../../utils/common";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <section className="cart">
      <h2 className="title">Your cart</h2>

      {!cart.length ? (
        <div className="empty">Cart is empty</div>
      ) : (
        <>
          <div className="list">
            {cart.map((item) => {
              const { title, category, images, price, id, quantity } = item;

              return (
                <div className="item" key={id}>
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className="info">
                    <h3 className="name">{title}</h3>
                    <div className="category">{category.name}</div>
                  </div>

                  <div className="price">{price}грн</div>

                  <div className="quantity">
                    <div
                      className="minus"
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`}
                        />
                      </svg>
                    </div>

                    <span>{quantity}</span>

                    <div
                      className="plus"
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`}
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="total">{price * quantity}грн</div>

                  <div
                    className="closeCart"
                    onClick={() => removeItem(item.id)}
                  >
                    <svg className="icon">
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="actions">
            <div className="total">
              TOTAL PRICE:{" "}
              <span>
                {sumBy(cart.map(({ quantity, price }) => quantity * price))}грн
              </span>
            </div>

            <button className="proceed">Proceed to checkout</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
