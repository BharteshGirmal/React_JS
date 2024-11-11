import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPhoneNumber,
  GoogleAuthProvider,
  RecaptchaVerifier,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV-4MVx1XvicF3OT5GF9kVs8AR2_4YQ-w",
  authDomain: "capstone-db-7244a.firebaseapp.com",
  projectId: "capstone-db-7244a",
  storageBucket: "capstone-db-7244a.appspot.com",
  messagingSenderId: "660774090004",
  appId: "1:660774090004:web:224cf7f8a65f9e8abbbe01",
};

const FireBaseApp = initializeApp(firebaseConfig);
console.log(FireBaseApp);

const googlePropvider = new GoogleAuthProvider();
googlePropvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInPopup = () => signInWithPopup(auth, googlePropvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googlePropvider);

export const firebaseDB = getFirestore();

export const AddCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const CollectionRef = collection(firebaseDB, collectionKey);
  const batch = writeBatch(firebaseDB);
  objectToAdd.forEach((object) => {
    const docRef = doc(CollectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Database created...");
};

export const getCollectionAndDocument = async () => {
  const collectionRef = collection(firebaseDB, "categories");
  const Q = query(collectionRef);
  const querySnapShot = await getDocs(Q);

  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserData = async (userAuth) => {
  if (!userAuth) return;
  const UserDocRef = doc(firebaseDB, "users", userAuth.uid);
  const userSnapshot = await getDoc(UserDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(UserDocRef, {
        displayName,
        email,
        createdAt,
      });
      console.log("User Created");
    } catch (error) {
      console.log("Error creating user:", error);
    }
  }
  return UserDocRef;
};

export const createUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignoutUser = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);

// Mobile Number Verification
export const setupRecaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("ReCAPTCHA verified");
        },
      },
      auth
    );
  }
};

export const signInWithPhone = async (phoneNumber) => {
      console.log('Entered phone number is'+ phoneNumber);
      
  setupRecaptcha();
  const appVerifier = window.recaptchaVerifier;
  console.log(appVerifier);
  

  try {
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    window.confirmationResult = confirmationResult;
    console.log("OTP sent successfully");
    return confirmationResult;
  } catch (error) {
    console.log("Error sending OTP:", error);
    throw error;
  }
};
