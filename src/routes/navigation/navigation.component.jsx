import { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import SearchBar from "../../components/search-bar/SearchBar";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { fetchCategoriesStart } from "../../store/categories/category.action";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Container,
  SearchContainer,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  //////////////////// SearchBar Code ////////////////////

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  const categoriesMap = useSelector(selectCategoriesMap);

  const products = Object.values(categoriesMap);
  let array = [];
  if (products && products.length) {
    products.forEach((product) => {
      array.push(...product);
    });
  }
  console.log(array);

  ////////////////////////////////////////////////////////

  return (
    <Fragment>
      <Container>
        <SearchContainer>
          {products && products.length ? (
            <SearchBar placeholder="Search " data={array} />
          ) : null}
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
      </Container>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
