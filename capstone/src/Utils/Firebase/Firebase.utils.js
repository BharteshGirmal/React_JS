import {initializeApp} from 'firebase/app'
import {
      getAuth, 
      signInWithRedirect, 
      signInWithPopup, 
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      GoogleAuthProvider} from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
      apiKey: "AIzaSyDV-4MVx1XvicF3OT5GF9kVs8AR2_4YQ-w",
      authDomain: "capstone-db-7244a.firebaseapp.com",
      projectId: "capstone-db-7244a",
      storageBucket: "capstone-db-7244a.appspot.com",
      messagingSenderId: "660774090004",
      appId: "1:660774090004:web:224cf7f8a65f9e8abbbe01"
      };

const FireBaseApp = initializeApp(firebaseConfig);
console.log(FireBaseApp);

const googlePropvider = new GoogleAuthProvider();

googlePropvider.setCustomParameters({
      prompt:'select_account'
});

export const auth = getAuth();
export const signInPopup = ()=> signInWithPopup(auth, googlePropvider);
export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth,googlePropvider);

export const firebaseDB = getFirestore();

export const createUserData= async (userAuth, {extraInfo})=>{
      if(!userAuth) return;
      if(extraInfo) {
            extraInfo={};
      }
      // userAuth.uid = is a unique id to search in the firestore database
      const UserDocRef = doc(firebaseDB, 'users', userAuth.uid);
      console.log('====================================');
      console.log(UserDocRef);
      console.log('====================================');

      const userSnapshot = await getDoc(UserDocRef);

      // if userSnapshot does not exists
      if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(UserDocRef, {
                  displayName,
                  email,
                  createdAt,
                  ...extraInfo
            });

            console.log('User Created');
            
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
      }
      // if userSnapshot.exists
      return UserDocRef;
}

// Seperating Frontend from Backend 
export const createUserWithEmailPassword= async(email, password)=>{
      if(!email || !password) return;

      return await createUserWithEmailAndPassword(auth, email, password);
}
export const SignInUserWithEmailPassword= async(email, password)=>{
      if(!email || !password) return;

      return await signInWithEmailAndPassword(auth, email, password);
}