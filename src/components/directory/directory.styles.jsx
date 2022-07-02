import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Container = styled.div`
  position: relative;
`;

export const Zindex = styled.div`
  position: absolute;
  left: 37%;
  top: -15%;

  @media screen and (max-width: 950px) {
    left: 31%;
  }

  @media screen and (max-width: 900px) {
    left: 35%;
  }

  @media screen and (max-width: 800px) {
    top: -16%;
    left: 36%;
  }

  @media screen and (max-width: 750px) {
    top: -15%;
    left: 34%;
  }

  @media screen and (max-width: 700px) {
    top: -11%;
    left: 32%;
  }

  @media screen and (max-width: 600px) {
    left: 29%;
  }

  @media screen and (max-width: 550px) {
    top: -11%;
    left: 28%;
  }

  @media screen and (max-width: 500px) {
    top: -5.35%;
  }
  @media screen and (max-width: 450px) {
    left: 23%;
  }

  @media screen and (max-width: 400px) {
    top: -5.5%;
    left: 22%;
  }
`;
