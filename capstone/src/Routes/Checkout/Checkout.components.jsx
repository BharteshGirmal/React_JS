import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart-context'
import './Checkout.styles.scss';
import CheckoutItem from '../../Components/Checkout-item/Checkout-item.components';

export default function Checkout() {

const {cartItems, cartTotal}= useContext(CartContext);
  return (
    <div className='checkout-container'>
            <div className='checkout-header'>
            <div className='header-block'>
            <span>Product</span>
            </div>
            <div className='header-block'>
            <span>Description</span>
            </div>
            <div className='header-block'>
            <span>Quantity</span>
            </div>
            <div className='header-block'>
            <span>Price</span>
            </div>
            <div className='header-block'>
            <span>Remove</span>
            </div>
      </div>
      {cartItems.map((check)=>(
            <CheckoutItem  key={check.id}  Checkout={check}/>
      ))}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  )
}
