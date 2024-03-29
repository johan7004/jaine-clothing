import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs

} from "firebase/firestore";
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
initializeApp(firebaseConfig);
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

export const userDb = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(userDb, collectionKey);
  const batch = writeBatch(userDb);

   objectsToAdd.forEach((object)=>{
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
   })
   
   await batch.commit();
};

export const getCategoriesAndDocuments = async()=>{

  const collectionRef = collection(userDb, 'categories');
  const categoryquery= query(collectionRef);

  const querySnapShot = await getDocs(categoryquery);

  const categoryMap = querySnapShot.docs.reduce((acc, docSnapshot)=>{
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{});

  return categoryMap;

}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  //doc takes three arguments
  //docref is to check the user existance

  if (!userAuth) return;
  const userDocRef = doc(userDb, "users", userAuth.uid);

  

  const userSnapshot = await getDoc(userDocRef);
  

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
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
