import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

// import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./shopping-card.styles.scss";

const RecipeReviewCard = ({ product }) => {
  const currentUser = useSelector(selectCurrentUser);

  //   const { name, price, imageUrl, route } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  const logInHandler = () =>
    alert("Please log in to your account before adding products");

  // Navigate to the product card detail page via its route
  const navigate = useNavigate();
  //   const onNavigateHandler = () => navigate(route);

  return (
    <Card className="card-media" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image="https://i.ibb.co/vQ6BRgQ/Black-Dress.jpg"
        alt="Paella dish"
      />
      <div className="card-container">
        <div className="footer">
          <p>Name</p>
          <p>$90</p>
        </div>
        {currentUser ? (
          <Button
            variant="contained"
            // buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={addProductToCart}
          >
            Add to card
          </Button>
        ) : (
          <Button onClick={logInHandler}>Log in FIRST</Button>
        )}
      </div>
    </Card>
  );
};

export default RecipeReviewCard;
