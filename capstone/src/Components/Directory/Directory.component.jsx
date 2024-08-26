import React from 'react'
import CategoryItem from '../Directory-Item/DirectoryItem.coponent'
import './Directory.styles.scss';


const category= [
  {
    id:1,
    title:'Hats',
    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
    route:'/shop/hats'
  },
  {
    id:2,
    title:'Jackets',
    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
    route:'/shop/jackets'
  },
  {
    id:3,
    title:'Sneakers',
    imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
    route:'/shop/sneakers'

  },
  {
    id:4,
    title:'Womens',
    imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
    route:'/shop/womens'

  },
  {
    id:5,
    title:'Mens',
    imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
    route:'/shop/mens'
  },
];


export default function Directory() {
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
