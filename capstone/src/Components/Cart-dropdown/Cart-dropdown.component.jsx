import React, { useContext } from 'react'
import './Cart-dropdown.styles.scss';
import Buttons from '../../Components/Buttons/Buttons.components';
import CartItem from '../Cart-item/cart-item.component';
import { CartContext } from '../../Contexts/Cart-context';
import { useNavigate } from 'react-router-dom';

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();
  const checkOutPage = () => {
    navigate('/checkout');
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className='cart-dropdown-container'>
      {cartItems.length ? (
        <>
          <div className='cart-items'>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <Buttons onClick={checkOutPage} buttontype='google'>Go To Checkout</Buttons>
        </>
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
  );

}
