import React from "react";
import { useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./slider.styles.scss";

const Slider = ({ title, allProducts }) => {
  const navigate = useNavigate();

  /////////////////////////////////////////////////////////////////
  // Getting the top 5 products ids randomly
  const top5ProductsIDs = [];
  for (var i = 0; i < 5; i++) {
    top5ProductsIDs.push(
      allProducts[Math.floor(Math.random() * allProducts.length)]
    );
  }
  // console.log(top5ProductsIDs);

  // Getting the top 5 random products cards based on the top5ProductsIDs array
  const top5Products = [];
  top5ProductsIDs.map((product) => top5Products.push(product));
  // console.log(top5Products);

  // Storing the the 5 products into an array and pass it down to the pagination function
  const allProductsItems = [];
  top5Products.forEach((item) => {
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
      <h1 className="slider-title">{title}</h1>

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
