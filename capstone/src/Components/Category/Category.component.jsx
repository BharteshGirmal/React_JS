import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../../Contexts/Category.context';
import ProductCard from '../Product-card/Product-card.component';
import './Category.styles.scss';

export default function Category() {

  const {category}= useParams();
  const {categoryMap} = useContext(CategoryContext);
  const [products, setProducts]= useState(categoryMap[category]);

  useEffect(()=>{
      setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  console.log('from category-container');
  
  console.log('====================================');
  console.log(products);
  console.log('====================================');
  return (
    <>
    <h2 className='category-title'>{category.toUpperCase()}</h2>
    <div className='category-container'>
      {
        products && products.map((product)=>(
          <ProductCard key={product.id} product={product}/>
        ))
      }
    </div>
    </>
  )
}
