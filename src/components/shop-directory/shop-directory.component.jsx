import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import Spinner from "../spinner/spinner.component";

import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
  Center,
} from "./shop-directory.styles";

// Shop Page
const ShopDirectory = () => {
  const largeScreens = useMediaQuery("(min-width:1200px)");
  // console.log(largeScreens);

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreviewContainer key={title}>
              <Center>
                <Title to={title}>{title.toUpperCase()}</Title>
              </Center>
              <Preview>
                {products
                  .filter((_, idx) => (largeScreens ? idx < 5 : idx < 4))
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </Preview>
            </CategoryPreviewContainer>
          );
        })
      )}
    </Fragment>
  );
};

export default ShopDirectory;
