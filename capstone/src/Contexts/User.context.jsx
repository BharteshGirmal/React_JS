import React, { createContext, useEffect, useState } from 'react'
import { createUserData, onAuthStateChangeListener } from '../Utils/Firebase/Firebase.utils';
import { useReducer } from 'react';

export const userContext = createContext({
      userName:null,
      setUserName:()=>null,
      currentUser:null,
});

const INTIAL_STATE={
  username:null,
}

const USER_DETAILS ={
  SET_CURRENT_USER:"SET_CURRENT_USER"
}


// usereducer hook
// usereducer hook return an array containing the current state and dispatch type and payload (optional)
const reducerHook = (state, action)=>{
  console.log('Dispatched');
  console.log(action);
  
  const {type, payload}= action;
  switch(type){
    case USER_DETAILS.SET_CURRENT_USER : return{
      ...state,
      currentUser:payload
    }

    default:
      throw new Error( `unhandled type ${type} in useReducer `)

  }
  // this middleware function takes two args and return the current state 
}

export const UserProvider= ({children})=> {

// const [userName, setUserName]= useState(null);

// instead of usestate hook we can use the useReducer hook 

const [{currentUser}, dispatch ] = useReducer(reducerHook,INTIAL_STATE);
// destructring the values 

const setCurrentUser = (user)=>{
  dispatch({type:USER_DETAILS.SET_CURRENT_USER, payload:user});
}

const value ={currentUser, setCurrentUser};

useEffect(() => {
  const onAuthLister= onAuthStateChangeListener((user)=>{
    if(user){
      console.log(user);
      createUserData(user);
    }
    setCurrentUser(user);
  })
  return onAuthLister
}, []);


  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  )
}
