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

import { CategoryContainer, Title, Center } from "./category.styles";

import "./category.styles.scss";

// Nested Categories Pages inside the Shop Page
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  // Pagination Code
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 16;
  const pagesVisited = pageNumber * productsPerPage;

  const displayUsers =
    products &&
    products
      .slice(pagesVisited, pagesVisited + productsPerPage)
      .map((product) => <ProductCard key={product.id} product={product} />);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  // Calculationg the pageNumber
  const pageCount = Math.ceil(products && products.length / productsPerPage);
  // Change the page selection
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Fragment>
      <Title>
        <Link to="/shop">{category.toUpperCase()}</Link>
      </Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <CategoryContainer>{displayUsers}</CategoryContainer>
          <Center>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </Center>
        </>
      )}
    </Fragment>
  );
};

export default Category;
