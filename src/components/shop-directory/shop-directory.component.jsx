import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import RecipeReviewCard from "../../components/shopping-card/shopping-card.component";

import Loader from "../loader/loader.component";

import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
  Center,
} from "./shop-directory.styles";

// Shop Page
const ShopDirectory = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
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
                  .filter((_, idx) => idx < 4)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </Preview>
            </CategoryPreviewContainer>
          );
        })
      )}

      <Grid container spacing={2} padding={1}>
        <Grid item lg={3} sm={4} xs={6}>
          <RecipeReviewCard />
        </Grid>
        <Grid item lg={3} sm={4} xs={6}>
          <RecipeReviewCard />
        </Grid>
        <Grid item lg={3} sm={4} xs={6}>
          <RecipeReviewCard />
        </Grid>
        <Grid item lg={3} sm={4} xs={6}>
          <RecipeReviewCard />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ShopDirectory;
