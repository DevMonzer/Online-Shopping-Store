import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { fetchCategoriesStart } from "../../store/categories/category.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./card-details.scss";

import Spinner from "../spinner/spinner.component";

const Card = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const { cardId } = useParams();

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  //   const { categoriesMap } = useContext(CategoriesContext);
  const [productCard, setProductCard] = useState([]);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  // const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
  }, [data]);

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
          <p className="productCardDetail">
            This is a {productCard.name} {route.split("/")[2].slice(0, -1)}
            <br /> and you can get only for
          </p>
          <p className="productCardDetail">${productCard.price}</p>
          {currentUser ? (
            <Button
              buttonType={BUTTON_TYPE_CLASSES.facebook}
              // onClick={addProductToCart}
            >
              Add to card
            </Button>
          ) : (
            <Button onClick={logInHandler}>Log in FIRST</Button>
          )}
          <br />
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
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
