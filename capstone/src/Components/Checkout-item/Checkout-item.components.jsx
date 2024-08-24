import React, { useContext } from 'react'
import './Checkout-item.styles.scss';
import { CartContext } from '../../Contexts/Cart-context';

export default function CheckoutItem({Checkout}) {
      const {name, price, imageUrl, quantity}= Checkout;
      const {ClearCartItem, addItemsToCart, removeCartItem}= useContext(CartContext);
      const clearItem = () => ClearCartItem(Checkout);
  return (
      <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={name}/>
        </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
            <div className='arrow' onClick={()=>removeCartItem(Checkout)}>
            &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=>addItemsToCart(Checkout)}>
            &#10095;
            </div>
            </span>
      <span className='price'>{price}</span>
      <div className='remove' onClick={clearItem}>
            &#10005;
      </div>
</div>
  )
}
