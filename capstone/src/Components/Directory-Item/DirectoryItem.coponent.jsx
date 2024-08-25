import React from 'react'
import './DirectoryItem.styles.scss'
export default function CategoryItem ({category}) {

const { imageUrl, title}= category;
console.log(category);
console.log(title);
  return ( 
      <div  className="directory-container">
      <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}} />
      <div className="directory-body-container">
      <h1>{title}</h1>
      <p>Shop Now</p>
      </div>
      </div>
  )
}
