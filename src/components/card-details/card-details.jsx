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
  const { cardId } = useParams();
  const [productCard, setProductCard] = useState([]);

  const categoriesMap = useSelector(selectCategoriesMap);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // useEffect(() => {
  //   dispatch(fetchCategoriesStart());
  // }, []);

  // Getting all categoriesMap products and spread them into one array
  let allProducts = [];
  Object.values(categoriesMap).map((product) => {
    allProducts.push(...product);
  });

  console.log(allProducts);

  const addProductToCart = () =>
    dispatch(addItemToCart(cartItems, productCard));

  let data, route;

  if (window.location.pathname.includes("/shop/hats/")) {
    data = categoriesMap["hats"];
    route = "/shop/hats";
  } else if (window.location.pathname.includes("/shop/jackets/")) {
    data = categoriesMap["jackets"];
    route = "/shop/jackets";
  } else if (window.location.pathname.includes("/shop/sneakers/")) {
    data = categoriesMap["sneakers"];
    route = "/shop/sneakers";
  } else if (window.location.pathname.includes("/shop/womens/")) {
    data = categoriesMap["womens"];
    route = "/shop/womens";
  } else if (window.location.pathname.includes("/shop/mens/")) {
    data = categoriesMap["mens"];
    route = "/shop/mens";
  } else if (window.location.pathname.includes("/shop/kids/")) {
    data = categoriesMap["kids"];
    route = "/shop/kids";
  }

  useEffect(() => {
    if (data) {
      const product = data.filter((product) => product.id == cardId);
      setProductCard(...product);
    }
  });

  // Navigate to the product card detail page via its route
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  const logInHandler = () =>
    alert("Please log in to your account before adding products");

  return (
    <Fragment>
      {!data?.length ? (
        <Spinner />
      ) : (
        <>
          <div className="productCardContainer">
            <img
              className="productCardImage"
              src={productCard.imageUrl}
              alt={`${productCard.name}`}
            />
            <div className="productCardDetails">
              <p>
                This is
                <span className="productCardName">{productCard.name}</span>
                <br /> and you can get only for
              </p>
              <p>${productCard.price}</p>
              {currentUser ? (
                <Button
                  buttonType={BUTTON_TYPE_CLASSES.facebook}
                  onClick={addProductToCart}
                >
                  Add to card
                </Button>
              ) : (
                <Button
                  buttonType={BUTTON_TYPE_CLASSES.facebook}
                  onClick={logInHandler}
                >
                  Log in FIRST
                </Button>
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
          <p
            style={{
              fontSize: "1.2rem",
              textAlign: "center",
              fontFamily: "Lato",
              paddingTop: "2rem",
              fontFamily: "Roboto",
            }}
          >
            This app is built by :&nbsp;
            <a
              style={{
                color: "rgba(51, 123, 255, 0.884)",
                textDecoration: "underline",
              }}
              target="_blank"
              href="https://dev-monzer.vercel.app/"
              rel="noreferrer"
            >
              Monzer
            </a>
          </p>
        </>
      )}
    </Fragment>
  );
};

export default Card;
