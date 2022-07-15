import { Fragment } from "react";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import Spinner from "../../components/spinner/spinner.component";

import ProductCard from "../../components/product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
  Center,
} from "./category-preview.styles";

// Nested Shop Components [Hats, jackets, ... etc]
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

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
                  .filter((_, idx) => idx < 4)
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

export default CategoriesPreview;
