import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

import "./shopping-card.styles.scss";

const ShoppingCard = ({ product }) => {
  const currentUser = useSelector(selectCurrentUser);

  const { name, price, imageUrl, route } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  const logInHandler = () =>
    alert("Please log in to your account before adding products");

  // Navigate to the product card detail page via its route
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <Card onClick={onNavigateHandler} className="card-media">
      <img className="card-image" src={imageUrl} alt={`${name}`} />
      <div className="card-container">
        <div className="footer">
          <p>{name}</p>
          <p>${price}</p>
        </div>
        {currentUser ? (
          <Button variant="contained" onClick={addProductToCart}>
            Add to card
          </Button>
        ) : (
          <Button variant="contained" color="secondary" onClick={logInHandler}>
            Log in FIRST
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ShoppingCard;
