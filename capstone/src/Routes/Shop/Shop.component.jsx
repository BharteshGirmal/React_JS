import React from 'react';
import './Shop.styles.scss';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../Categories-preview/categories-preview.component';
import Category from '../../Components/Category/Category.component';


export default function Shop() {
  
  return (
   <Routes>
    <Route index element={<CategoriesPreview/>}/>
    <Route path=':category' element={<Category/>}/>
   </Routes>

  );
}
