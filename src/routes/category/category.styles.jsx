import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

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

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
