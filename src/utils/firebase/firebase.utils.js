import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmZrTj372CKChjA6UGBti7xAd7sLF-ayQ",
  authDomain: "jaine-clothing.firebaseapp.com",
  projectId: "jaine-clothing",
  storageBucket: "jaine-clothing.appspot.com",
  messagingSenderId: "201065873317",
  appId: "1:201065873317:web:3a8b71ae4c6a9b4f5f324c",
  measurementId: "G-ENDZHKS69S",
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

const userDb = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  //doc takes three arguments
  //docref is to check the user existance

  if (!userAuth) return;
  const userDocRef = doc(userDb, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  //if the user does not exists

  if (!userSnapshot.exists()) {
    const { displayName, email, phoneNumber } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        phoneNumber,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
