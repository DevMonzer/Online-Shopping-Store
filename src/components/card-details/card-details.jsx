import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Spinner from "../spinner/spinner.component";
import Slider from "../slider/slider.component";
import Loader from "../loader/loader.component";

import "./card-details.scss";

const Card = () => {
  const { cardId } = useParams();
  const [productCard, setProductCard] = useState([]);

  const categoriesMap = useSelector(selectCategoriesMap);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Getting all categoriesMap products
  let allProducts = [];
  Object.values(categoriesMap).map((product) => {
    allProducts.push(...product);
  });

  // Getting back the selected product card
  useEffect(() => {
    if (allProducts && allProducts.length) {
      const productCard = allProducts.filter((product) => product.id == cardId);
      setProductCard(...productCard);
    }
  }, [allProducts]);

  // Navigate to the product card detail page via its route
  const navigate = useNavigate();

  // Event Handlers
  const addProductToCart = () =>
    dispatch(addItemToCart(cartItems, productCard));
  const logInHandler = () =>
    alert("Please log in to your account before adding products");

  return (
    <Fragment>
      {!allProducts?.length ? (
        <Loader />
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
                This is&nbsp;
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
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </div>
          </div>
          <Slider title="Top Products" allProducts={allProducts} />
        </>
      )}
    </Fragment>
  );
};

export default Card;
