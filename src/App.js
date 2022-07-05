import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation-bar/navigation.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/SignIn/Sign-in.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="SignIn" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
