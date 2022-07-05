import { React, useEffect } from "react";
import SignUpForm from "../../components/sign-up-forms/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
//import { auth,signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
// import {getRedirectResult} from 'firebase/auth';

export default function SignIn() {
  // this logic can be used if we need page redirection on sign in
  // useEffect( ()=>{
  //     async function userRedirectSignIn(){
  //         const redirectResponse = await getRedirectResult(auth);

  //     if(redirectResponse){
  //         const userDocRef = await createUserDocumentFromAuth(redirectResponse.user)
  //     }

  //     }
  //     userRedirectSignIn();

  // },[]);
  const logGoogleUser = async () => {
    // user object is being destructured from the response.
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  //   const logGoogleUserRedirect = async () => {
  //     const {user} = await signInWithGoogleRedirect();
  //     // createUserDocumentFromAuth(user)
  //     console.log(user)
  //   };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignUpForm />
    </div>
  );
}
