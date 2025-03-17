import { useSelector } from "react-redux";
import CartItem from "./cartItem";
import React from "react";

export default function Cart() {
  const cartsState = useSelector((state) => state.cartItem);

  console.log(cartsState);

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
          <div className="total"></div>
        </div>
        {cartsState.map(
          ({ productId, title, rating, price, imageUrl, quantity }) => (
            <CartItem
              key={title}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={imageUrl}
              rating={rating}
            />
          )
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">
            $
            {cartsState.reduce(
              (accumlator, currentValue) =>
                accumlator + currentValue.price * currentValue.quantity,
              0
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
