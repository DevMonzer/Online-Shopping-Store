import { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import SearchBar from "../../components/search-bar/SearchBar";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Container,
  SearchContainer,
} from "./navigation.styles";

const Navigation = () => {
  //////////////////// SearchBar Code ////////////////////
  const [categoryMap, setCategoriesMap] = useState([]);

  // Getting the stored data in the shop data on our firestore database
  useEffect(() => {
    // Getting back the shop data as an array of objects from the firestore database
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  // Getting all categoriesMap products and spread them into one variable
  // const products = Object.values(categoryMap);
  // if (products && products.length) {
  //   var allProducts = [
  //     ...products[0],
  //     ...products[1],
  //     ...products[2],
  //     ...products[3],
  //     ...products[4],
  //   ];
  // }
  // console.log(allProducts);
  ////////////////////////////////////////////////////////

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <Container>
        <SearchContainer>
          hhh
          {/* {products && products.length ? (
            <SearchBar placeholder="Search " data={allProducts} />
          ) : null} */}
        </SearchContainer>
        <NavigationContainer>
          <LogoContainer to="/">
            <CrwnLogo className="logo" />
          </LogoContainer>
          <NavLinks>
            <NavLink to="/shop">SHOP</NavLink>
            {currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to="/sign-in">SIGN IN</NavLink>
            )}
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Container>
    </Fragment>
  );
};

export default Navigation;
