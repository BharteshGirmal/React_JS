import React, { createContext, useEffect, useState } from 'react'
import { createUserData, onAuthStateChangeListener } from '../Utils/Firebase/Firebase.utils';
export const userContext = createContext({
      userName:null,
      setUserName:()=>null,
});

export const UserProvider= ({children})=> {

const [userName, setUserName]= useState(null);
const value ={userName, setUserName};

useEffect(() => {
  const onAuthLister= onAuthStateChangeListener((user)=>{
    if(user){
      console.log(user);
      createUserData(user);
    }
    setUserName(user);
  })
  return onAuthLister
}, []);


  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  )
}
