import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as Shoplogo } from  '../../Assets/Shoplogo.svg';
import './Navigation.styles.scss';
import { userContext } from '../../Contexts/User.context';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { SignoutUser } from '../../Utils/Firebase/Firebase.utils';
import CartIcon from '../Cart-icon/cart-icon.component';
import CartDropdown from '../Cart-dropdown/Cart-dropdown.component';
import { CartContext } from '../../Contexts/Cart-context';

export default function Navbar() {
  const {userName, setUserName}= useContext(userContext);
  const {isCartOpen } = useContext(CartContext);
  const SignOut= async ()=>{
    console.log("Signout Method Called ...");
    
    try {
      await SignoutUser(userName);
      setUserName(null);
    } catch (error) {
      console.error(error);
    } 
  }

  console.log(userName);
  return (
    <Fragment>
    <div className='navigation'>
      <Link className='logo-container' to="/">
        <Shoplogo className="logo" style={{ height: '50px', width: 'auto' }} />
      </Link>
      <div className='welcome-container'>
        <h2 className='text-light'>Capstone Fashions </h2>
      </div>
      <div className='nav-links-container'>
        <Link className='nav-link' to="/shop">Shop</Link>
        {userName ? (''):(<Link className='nav-link' to="/auth">Sign In</Link>)}
      </div>
      <Link className='logo-container' to="/">
        <CartIcon />
      </Link>
      {userName && <div className='profile-logout-container'>
        <div className='profile-logout'>
          <FaUserCircle className='profile-icon' />
          <span className='text-light'>{userName.displayName ? userName.displayName :'Unknown'}</span>
          <FaSignOutAlt className='logout-icon'  onClick={SignOut}/>
        </div>
      </div>}
      {isCartOpen && <CartDropdown />}
    </div>
    <Outlet />
  </Fragment>

  )
}
