import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
} from "../store/cartReducer";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          onClick={() => productId && dispatch(decreaseItemQuantity(productId))}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => productId && dispatch(increaseItemQuantity(productId))}
        >
          +
        </button>
        
      </div>
      <div className="item-total">${quantity * price}</div>
      <div className="item-remove">
        <button
          onClick={() => {
            console.log("Remove button clicked for productId:", productId); // Debug message
            if (productId) {
              const userConfirmed = confirm(
                `Are you sure you want to remove "${title}" from the cart?`
              );
              
              if (userConfirmed) {
                dispatch(removeFromCart(productId));
              }
            }
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
