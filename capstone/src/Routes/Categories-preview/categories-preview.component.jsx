import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../Contexts/Category.context';
import CategoryPreview from '../../Components/Category-preview/Category-preview.component';


export default function CategoriesPreview() {
  
  const {categoryMap}= useContext(CategoryContext);
  
  return (
    <div className='category-preview-container'>
    {
      Object.keys(categoryMap).map((title)=>
      {

        const products = categoryMap[title];
        return(
          <CategoryPreview key={title} title={title} products={products} />
        )
      })
    }
    </div>

  );
}
