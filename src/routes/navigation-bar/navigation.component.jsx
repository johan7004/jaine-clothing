import { React, Fragment, useContext} from "react";
import CartIcon from "./../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "./../../components/contexts/user.context";
import {CartStatusContext} from './../../components/contexts/cart-open.context'
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "./../../assets/crown.svg";
import { signOutUser } from "./../../utils/firebase/firebase.utils.js";
import "./navigation.styles.css";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const {cartStatus} = useContext(CartStatusContext)

  console.log(cartStatus)
  

  const signOutHandler = async () => {
    await signOutUser();
  };


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartStatus &&<CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}
