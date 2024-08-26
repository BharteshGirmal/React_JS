import React from 'react'
import './DirectoryItem.styles.scss'
import { useNavigate } from 'react-router-dom';
export default function CategoryItem ({category}) {

const { imageUrl, title, route}= category;
const navigate= useNavigate();
const handleNavigate = ()=>{
  navigate(route);
}
console.log(category);
console.log(title);
  return ( 
      <div  className="directory-container">
      <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}} />
      <div className="directory-body-container" onClick={handleNavigate}>
      <h1>{title}</h1>
      <p>Shop Now</p>
      </div>
      </div>
  )
}
