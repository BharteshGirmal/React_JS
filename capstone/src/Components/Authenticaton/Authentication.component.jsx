// import React, { useEffect } from 'react'
import React  from 'react'
import './Authentication.styles.scss'
// import {getRedirectResult} from  'firebase/auth'

// import { auth ,signInPopup,createUserData } from '../../Utils/Firebase/Firebase.utils'; 
import Signup from '../Sign-up/Signup.component';
import Signin from '../Sign-in/Sign-in.component';

export default function Authentication(props) {

      // async function fetchdata (){
      //       const response = await getRedirectResult(auth);
      //       if(response){
      //             const userDocRef = createUserData(response.user);
      //             console.log(userDocRef);
      //       }
      // }
      // useEffect( ()=>{
      //       fetchdata();
      // },[]);

  return (
    <div className='authentication-container'>
      <Signin/>
      <Signup/>
    </div>
  )
}
