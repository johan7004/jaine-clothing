import { React} from "react";
import SignInForm from "../../components/sign-in-form/sign-in.component";
import SignUpForm from "../../components/sign-up-forms/sign-up-form.component";
import './authentication.styles.css'


export default function Authentication() {

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
