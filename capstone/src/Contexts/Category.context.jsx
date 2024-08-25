import React, { createContext, useEffect, useState } from 'react'
// import PRODUCTS from '../shop-data.json';

// import SHOP_DATA from '../Shop-data';
import { AddCollectionAndDocuments , getCollectionAndDocument} from '../Utils/Firebase/Firebase.utils';

export const CategoryContext = createContext({
      categoryMap:{},
}
);

export function CategoryProvider({children}) {
const [categoryMap, setCategoryMap]= useState({});

useEffect(() => {
  const getCatgories = async()=>{
    const catgoryMap = await getCollectionAndDocument();
    console.log(catgoryMap);
    setCategoryMap(catgoryMap);
  };
  getCatgories();
}, []);

const value={categoryMap};

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  )
}
