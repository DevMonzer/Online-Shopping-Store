import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import { selectCurrentUser } from "../../store/user/user.selector";

import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const currentUser = useSelector(selectCurrentUser);

  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  const logInHandler = () =>
    alert("Please log in to your account before adding products");

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      {currentUser ? (
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={}
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
