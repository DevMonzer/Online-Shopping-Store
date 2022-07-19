import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 0px;
    margin-top: 40px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: 20%;
  z-index: 1;

  @media screen and (max-width: 900px) {
    top: 15%;
  }

  @media screen and (max-width: 700px) {
    top: 4%;
  }
`;
