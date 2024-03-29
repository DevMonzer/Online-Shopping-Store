import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import ErrorHandler from "./routes/error-handler/error-handler";

import Card from "./components/card-details/card-details";
import ContactUs from "./components/contact-us/contact-us.component";
import SignIn from "./components/sign-in-form/sign-in-form.component";
import SignUp from "./components/sign-up-form/sign-up-form.component";

import { checkUserSession } from "./store/user/user.action";

const App = () => {
  // Checking the user session
  const dispatch = useDispatch();

  // Getting the user session object
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />

          {/* Nested card details component Routes */}
          <Route path='shop/hats/:cardId' element={<Card />} />
          <Route path='shop/jackets/:cardId' element={<Card />} />
          <Route path='shop/sneakers/:cardId' element={<Card />} />
          <Route path='shop/kids/:cardId' element={<Card />} />
          <Route path='shop/mens/:cardId' element={<Card />} />
          <Route path='shop/womens/:cardId' element={<Card />} />

          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />

          <Route path='checkout' element={<Checkout />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/*' element={<ErrorHandler />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
