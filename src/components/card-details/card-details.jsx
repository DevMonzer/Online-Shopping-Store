import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

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