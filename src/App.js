import Home from "./routes/home/home.component";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation-bar/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/SignIn/authentication.component";
import Checkout from "./routes/checkout/checkout.component.jsx";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils.js";
import { setCurrentUser } from "./store/User/user-action";
// import FireCms from "./routes/CMS/FireCms.tsx";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // manages user auth state and also connects with firbase.utils.js to create collection in firstore database
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe; // avoids memory leaks
  }, [dispatch]); // dispatch will be returned from redux and will remain the same, will not have re-render side effect
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
