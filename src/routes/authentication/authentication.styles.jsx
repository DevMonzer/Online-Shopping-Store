import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin: 0;
  }
`;

export const MarginBottom = styled.span`
  @media screen and (max-width: 800px) {
    margin: 30px 0;
  }
`;
