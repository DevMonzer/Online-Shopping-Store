import { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCurrentUser } from "../../store/user/user.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./card-details.styles.scss";

import Spinner from "../spinner/spinner.component";

const Card = () => {
  const { cardId } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [productCard, setProductCard] = useState([]);

  const currentUser = useSelector(selectCurrentUser);

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  if (window.location.pathname.includes("/shop/hats/")) {
    var data = categoriesMap["hats"];
    var route = "/shop/hats";
  } else if (window.location.pathname.includes("/shop/jackets/")) {
    var data = categoriesMap["jackets"];
    var route = "/shop/jackets";
  } else if (window.location.pathname.includes("/shop/sneakers/")) {
    var data = categoriesMap["sneakers"];
    var route = "/shop/sneakers";
  } else if (window.location.pathname.includes("/shop/womens/")) {
    var data = categoriesMap["womens"];
    var route = "/shop/womens";
  } else if (window.location.pathname.includes("/shop/mens/")) {
    var data = categoriesMap["mens"];
    var route = "/shop/mens";
  } else if (window.location.pathname.includes("/shop/kids/")) {
    var data = categoriesMap["kids"];
    var route = "/shop/kids";
  }

  useEffect(() => {
    if (data) {
      const product = data.filter((product) => product.id == cardId);
      setProductCard(product[0]);
    }
  }, []);

  // Navigate to the product card detail page via its route
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  // Getting the currentUser state

  const logInHandler = () =>
    alert("Please log in to your account before adding products");

  return (
    <Fragment>
      <div className="productCardContainer">
        <img
          className="productCardImage"
          src={productCard.imageUrl}
          alt={`${productCard.name}`}
        />
        <div className="productCardDetails">
          <p>{productCard.name}</p>
          <p>${productCard.price}</p>
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
          <br />
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={onNavigateHandler}
          >
            Go Back
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
