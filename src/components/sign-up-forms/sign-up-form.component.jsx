import { React, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "./../buttons/button.component";
import "./sign-up-forms.styles.css";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`password does not match`);
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(`User email already exist`);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't Have an Account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={formSubmit}>
        <FormInput
          label="User Name"
          inputOptions={{
            type: "text",
            onChange: handleChange,
            required: true,
            name: "displayName",
            value: displayName,
          }}
        />

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

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            onChange: handleChange,
            required: true,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}
