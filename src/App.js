import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Card from "./components/card-details/card-details";
import Checkout from "./routes/checkout/checkout.component";
import SignIn from "./components/sign-in-form/sign-in-form.component";
import SignUp from "./components/sign-up-form/sign-up-form.component";

import { GlobalStyle } from "./global.styles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />

          {/* Nested card details components */}
          <Route path="shop/hats/:cardId" element={<Card />} />
          <Route path="shop/jackets/:cardId" element={<Card />} />
          <Route path="shop/sneakers/:cardId" element={<Card />} />
          <Route path="shop/kids/:cardId" element={<Card />} />
          <Route path="shop/mens/:cardId" element={<Card />} />
          <Route path="shop/womens/:cardId" element={<Card />} />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
