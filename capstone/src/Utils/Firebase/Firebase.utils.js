import {initializeApp} from 'firebase/app'
import {
      getAuth, 
      signOut,
      signInWithRedirect, 
      signInWithPopup, 
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      onAuthStateChanged,
      GoogleAuthProvider} from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'

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

export const AddCollectionAndDocuments = async (collectionKey, objectToAdd)=>{
      const CollectionRef = collection(firebaseDB,collectionKey );
      // for secure successfull transaction use batch method
      const batch =  writeBatch(firebaseDB);
      objectToAdd.forEach((object)=>{
            const docRef = doc(CollectionRef, object.title.toLowerCase());
            batch.set(docRef, object);
      });
      await batch.commit();
      console.log('Database created...');
}

export const getCollectionAndDocument = async ()=>{
      const collectionRef = collection(firebaseDB, 'categories');
      const Q = query(collectionRef);
      console.log('====================================');
      console.log(Q);
      console.log('====================================');
      const querySnapShot = await getDocs(Q);
      console.log('====================================');
      console.log(querySnapShot);
      console.log('====================================');
      const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot)=>{
            const {title, items}= docSnapShot.data();
            acc[title.toLowerCase()] = items;

            return acc;
            
      }, {});

      console.log('====================================');
      console.log(categoryMap);
      console.log('====================================');
      return categoryMap;

}

export const createUserData= async (userAuth)=>{
      if(!userAuth) return;
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

export const SignoutUser= async()=> await signOut(auth);

export const onAuthStateChangeListener = (callback)=> onAuthStateChanged(auth, callback);