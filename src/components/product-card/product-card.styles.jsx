import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 400px) {
    padding: 5px 0;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    cursor: pointer;

    @media screen and (max-width: 400px) {
      width: 90%;
    }
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px 0 10px;
    }

    @media screen and (max-width: 400px) {
      width: 60%;
    }
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 1000px) {
    width: 96%;
  }

  @media screen and (max-width: 650px) {
    width: 92%;
  }

  @media screen and (max-width: 400px) {
    width: 83%;
    font-size: 14px;
  }
`;

export const Name = styled.span`
  width: 90%;
`;

export const Price = styled.span`
  width: 10%;
`;
