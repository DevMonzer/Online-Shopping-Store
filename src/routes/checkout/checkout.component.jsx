import { useSelector, useDispatch } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import useMediaQuery from "@mui/material/useMediaQuery";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const dispatch = useDispatch();
  // Close the cart dropdown when a user navigates to the checkout component
  dispatch(setIsCartOpen(false));

  const mobile = useMediaQuery("(max-width:600px)");

  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const renderingProducts = cartItems.map((cartItem) => (
    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  ));

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>{mobile ? "Name" : "Description"}</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {currentUser && renderingProducts}
      <Total>Total: {currentUser && "$" + cartTotal}</Total>

      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
