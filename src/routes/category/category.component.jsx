import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import ReactPaginate from "react-paginate";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import { CategoryContainer, Title } from "./category.styles";

// Categories Pages inside the Shop Page - Pagination needed
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  // Pagination Code
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 12;
  const pagesVisited = pageNumber * productsPerPage;

  // console.log(products);

  const displayUsers =
    products &&
    products
      .slice(pagesVisited, pagesVisited + productsPerPage)
      .map((product) => <ProductCard key={product.id} product={product} />);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>
        <Link to="/shop">{category.toUpperCase()}</Link>
      </Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {/* {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))} */}
          {displayUsers}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
