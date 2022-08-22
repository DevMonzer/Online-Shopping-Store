import { Fragment } from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

import { selectCategoriesIsLoading } from "../../store/categories/category.selector";

import NavBar from "../../components/navBar/navBar.component";
import Footer from "../../components/footer/footer.component";

const Navigation = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {!isLoading ? (
        <Spinner />
      ) : (
        <>
          <NavBar />
          <Outlet />
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default Navigation;
