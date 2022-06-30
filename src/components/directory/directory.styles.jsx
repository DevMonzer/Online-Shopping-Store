import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Zindex = styled.div`
  position: absolute;
  left: 37%;

  @media screen and (max-width: 2000px) {
    top: 2%;
  }

  @media screen and (max-width: 1000px) {
    left: 33%;
    top: 1%;
  }

  @media screen and (max-width: 900px) {
    top: 3%;
    left: 36%;
  }

  @media screen and (max-width: 750px) {
    left: 34%;
  }

  @media screen and (max-width: 750px) {
    top: 2.7%;
    left: 30%;
  }
`;
