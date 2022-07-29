import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import useMediaQuery from "@mui/material/useMediaQuery";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const mobile = useMediaQuery("(max-width:400px)");

  const currentUser = useSelector(selectCurrentUser);

  const { name, price, imageUrl, route } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const [first, second, third] = name.split(" ");

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  const logInHandler = () =>
    alert("Please log in to your account before adding products");

  // Navigate to the product card detail page via its route
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} onClick={onNavigateHandler} />
      <Footer>
        <Name>{mobile ? second : name}</Name>
        <Price>${price}</Price>
      </Footer>
      {currentUser ? (
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to card
        </Button>
      ) : (
        <Button onClick={logInHandler}>Log in FIRST</Button>
      )}
    </ProductCartContainer>
  );
};

export default ProductCard;
