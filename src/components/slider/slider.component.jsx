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
  const top5Products = [];
  for (var i = 0; i < 5; i++) {
    top5Products.push(
      allProducts[Math.floor(Math.random() * allProducts.length)]
    );
  }
  // console.log(top5Products);

  // Getting the top 5 random products cards based on the top5Products array
  const randomProducts = [];
  top5Products.map((product) => randomProducts.push(product));
  // console.log(randomProducts);

  // Storing the the 5 products into an array and pass it down to the pagination function
  const allProductsItems = [];
  randomProducts.forEach((item) => {
    allProductsItems.push(
      <img
        className="slider-link"
        onClick={() => navigate(item.route)}
        src={item.imageUrl}
        alt={item.name}
        role="presentation"
      />
    );
  });
  // console.log(allProductsItems);

  return (
    <>
      <Typography padding={"40px 0 20px 0"} textAlign="center" variant="h6">
        {title}
      </Typography>
      <AliceCarousel
        animationDuration={1500}
        autoPlayInterval={500}
        disableButtonsControls={true}
        // disableDotsControls={true}
        // autoPlayControls={false}
        mouseTracking
        autoHeight
        infinite={true}
        controlsStrategy={"responsive"}
        autoWidth={true}
        autoPlay={true}
        items={allProductsItems}
      />
    </>
  );
};

export default Slider;
