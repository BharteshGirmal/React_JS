import React, { useContext } from 'react'
import './Cart-dropdown.styles.scss';
import Buttons from '../../Components/Buttons/Buttons.components';
import CartItem from '../Cart-item/cart-item.component';
import { CartContext } from '../../Contexts/Cart-context';
import { Navigate, useNavigate } from 'react-router-dom';

export default function CartDropdown() {
  const {cartItems}= useContext(CartContext);

  const navigate = useNavigate();
  const checkOutPage = ()=>{
    navigate('/checkout');
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-item'/> 
      {cartItems.map((item)=>(
        <CartItem key={item.id} item={item}/>
      ))}
      <Buttons onClick={checkOutPage} buttontype='google'>Go To Checkout</Buttons>
    </div>
  )
}
