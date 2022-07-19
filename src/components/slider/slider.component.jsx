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

  // Storing the the 5 products into one array and pass it down to the AliceCarousel function
  const allProductsItems = [];
  top5Products.forEach((product) => {
    allProductsItems.push(
      <>
        <img
          className="slider-image"
          onClick={() => navigate(product.route)}
          src={product.imageUrl}
          alt={product.name}
          role="presentation"
        />
        <span className="slider-details">
          <span className="slider-name">{product.name}&nbsp;-&nbsp;</span>
          <span className="slider-price">${product.price}</span>
        </span>
      </>
    );
  });
  // console.log(allProductsItems);
  console.clear();

  return (
    <>
      {allProductsItems.length === 0 ? null : (
        <>
          <h1 className="slider-title">{title}</h1>
          <AliceCarousel
            animationDuration={1500}
            autoPlayInterval={500}
            disableButtonsControls={true}
            // disableDotsControls={true}
            // autoPlayControls={false}
            mouseTracking
            // autoHeight
            infinite={true}
            controlsStrategy={"responsive"}
            autoWidth={true}
            autoPlay={true}
            items={allProductsItems}
          />
        </>
      )}
    </>
  );
};

export default Slider;
