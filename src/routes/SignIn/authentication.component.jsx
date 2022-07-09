import { React} from "react";
import SignInForm from "../../components/sign-in-form/sign-in.component";
import SignUpForm from "../../components/sign-up-forms/sign-up-form.component";
import './authentication.styles.css'
//import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";
//import { auth,signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
// import {getRedirectResult} from 'firebase/auth';

export default function Authentication() {
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
  // const logGoogleUser = async () => {
  //   // user object is being destructured from the response.
  //   const { user } = await signInWithGooglePopup();
  //   createUserDocumentFromAuth(user);
  // };
  //   const logGoogleUserRedirect = async () => {
  //     const {user} = await signInWithGoogleRedirect();
  //     // createUserDocumentFromAuth(user)
  //     console.log(user)
  //   };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
