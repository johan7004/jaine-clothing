import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation-bar/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/SignIn/authentication.component";
// import FireCms from "./routes/CMS/FireCms.tsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
