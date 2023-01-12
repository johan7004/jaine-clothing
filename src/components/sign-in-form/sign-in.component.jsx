import { React, useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button ,{BUTTON_TYPE_COLORS} from "../buttons/button.component";
import "./sign-in-forms.styles.css";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    // user object is being destructured from the response.
    // this does not have to be destructred if we use Context pattern and isolate user Auth State from firebase
    await signInWithGooglePopup();
    if(window.location.href.includes('/auth')){
      console.log(`your still in auth page`)
      window.location= window.location.origin;
    }
    return
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
      if(window.location.href.include('auth')){
        window.location = window.location.origin;
      }
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("incorrect password");
      }
      if (error.code === "auth/user-not-found") {
        alert("user-not-found");
      }
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already Have an Account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={formSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            onChange: handleChange,
            required: true,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            onChange: handleChange,
            required: true,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_COLORS.google}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
