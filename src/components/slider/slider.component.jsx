import React from "react";
import { useNavigate } from "react-router-dom";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Typography } from "@mui/material";

import "./slider.styles.scss";

const Slider = ({ title, allProducts }) => {
  const navigate = useNavigate();

  /////////////////////////////////////////////////////////////////
  // Getting the top 5 products ids randomly
  const top5Products = [
    allProducts[Math.floor(Math.random() * allProducts.length)],
    allProducts[Math.floor(Math.random() * allProducts.length)],
    allProducts[Math.floor(Math.random() * allProducts.length)],
    allProducts[Math.floor(Math.random() * allProducts.length)],
    allProducts[Math.floor(Math.random() * allProducts.length)],
  ];
  // console.log(top5Products);

  // Getting the top 5 random products based on the top5Products ids
  const randomProducts = [];
  top5Products.map((product) => randomProducts.push(product));
  // console.log(randomProducts);
};

export default Slider;
