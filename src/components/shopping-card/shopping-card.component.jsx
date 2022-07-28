import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

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
      <CardContent>
        <Typography className="typography">
          <span>Name</span>
          <Button>Add To Cart</Button>
          <span>$90</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeReviewCard;
