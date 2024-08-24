import React, { useContext } from 'react'
import {ReactComponent as ShoppingLogo} from '../../Assets/ShoppingLogo.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../Contexts/Cart-context';

export default function CartIcon() {
  const {isCartOpen, setIsCartOpen} = useContext(CartContext);
  const {cartCount}= useContext(CartContext);
  const toggleCartOpen= ()=>{
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
    <ShoppingLogo className='shopping-icon'/>
    <span className='item-count'>{cartCount}</span>
    </div>
  )
}
