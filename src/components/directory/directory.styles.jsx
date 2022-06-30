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
  }

  @media screen and (max-width: 900px) {
    top: 12%;
    left: 36%;
  }

  @media screen and (max-width: 750px) {
    top: 10%;
    left: 34%;
  }

  @media screen and (max-width: 380px) {
    top: 11%;
    left: 30%;
  }
`;
