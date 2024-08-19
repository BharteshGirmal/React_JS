import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as Shoplogo } from  '../../Assets/Shoplogo.svg';
import './Navigation.styles.scss';

export default function Navbar() {
  return (
    <Fragment>
      <div className='navigation'>
      <Link className='logo-container' to="/">
      <Shoplogo  className="logo" style={{ height: '50px', width: 'auto' }} />

      </Link>
      <div className='nav-links-container'>
       <Link className='nav-link' to="/shop">Shop</Link>   
       <Link className='nav-link' to="/auth">Sign In</Link>   
      </div>
      </div>
      <Outlet/>
    </Fragment>

  )
}
