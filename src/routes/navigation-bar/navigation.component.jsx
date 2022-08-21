import { React, Fragment, useContext } from "react";
import CartIcon from "./../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "./../../components/contexts/user.context";
import { CartStatusContext } from "./../../components/contexts/cart-open.context";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "./../../assets/crown.svg";
import { signOutUser } from "./../../utils/firebase/firebase.utils.js";
import {useSelector} from 'react-redux';
import {selectCurrentUser} from './../../store/User/user-selector'
import {
  NavigationContainer,
  NavLinks,
  NavLinksContainer,
  LogoContainer,
} from "./navigation.styles";

export default function Navigation() {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartStatusContext);

  

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinks className="nav-link" to="/shop">
            SHOP
          </NavLinks>

          {currentUser ? (
            <NavLinks as="span" className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </NavLinks>
          ) : (
            <NavLinks to="/auth">SIGN IN</NavLinks>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}
