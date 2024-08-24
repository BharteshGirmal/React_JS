import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../../Contexts/Products.context';
import ProductCard from '../../Components/Product-card/Product-card.component';
import './Shop.styles.scss';


export default function Shop() {
  
  const {products}= useContext(ProductsContext);
  
  return (
    <div className='productscontainer'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
}
