import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 0 10px;

  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 400px) {
    column-gap: 0px;
    row-gap: 20px;
  }
`;

export const Center = styled.h2`
  text-align: center;
  padding: 10px 0 20px 0;
`;
