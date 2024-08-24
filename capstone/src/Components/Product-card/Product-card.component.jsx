import React, { useContext } from 'react'
import './Product-card.styles.scss';
import Button from '../Buttons/Buttons.components'
import { CartContext } from '../../Contexts/Cart-context';

export default function ProductCard({product}) {

  const {addItemsToCart}= useContext(CartContext);

  const AddProductsToCart = ()=> addItemsToCart(product);

  const { name, price, imageUrl}= product;


  return (
    <div className='product-card-container'>
      <img alt={name} src={imageUrl}/>
      <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
      </div>
      <Button buttontype='inverted' onClick={AddProductsToCart} >Add To Cart</Button>
    </div>
  )
}
