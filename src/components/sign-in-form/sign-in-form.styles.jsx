import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;

  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 380px;
  }

  @media screen and (max-width: 480px) {
    width: 350px;
    margin: 0;
  }

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
