import React from 'react'
import ProductCard from '../Product-card/Product-card.component'
import './Category-preview.styles.scss';
import { Link } from 'react-router-dom';

export default function CategoryPreview({title, products}) {
  return (
      <div className='category-preview-container'>
            <h2><Link className='title' to={title}>{title}</Link></h2>
            <div className='preview'>
            {
                products.filter((_, index)=>index < 4).map((product)=>(
                  <ProductCard key={product.id} product={product}/>
                ))  
            }
            </div>
      </div>
  )
}
