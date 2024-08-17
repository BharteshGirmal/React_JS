import React from 'react'
import './categorylist.styles.scss';
export default function CategoryItem ({category}) {

const { imageUrl, title}= category;
console.log(title);
  return ( 
      <div  className="category-container">
      <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}} />
      <div className="category-body-container">
      <h1>{title}</h1>
      <p>Shop Now</p>
      </div>
      </div>
  )
}
