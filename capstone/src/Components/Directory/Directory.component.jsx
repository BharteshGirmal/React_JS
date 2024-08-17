import React from 'react'
import CategoryItem from '../Category-Item/CategoryItem.coponent'
import './Directory.styles.scss';
export default function Directory({category}) {
  return (
      <div className= "categories-container">
      { category.map((cat)=>{
        return(
          <CategoryItem  key={cat.id} category={cat}/>
        )
      })}
    </div>
  )
}
