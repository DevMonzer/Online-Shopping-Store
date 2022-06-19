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

export const Margin = styled.div`
  @media screen and (max-width: 400px) {
    margin-left: 20px;
  }
`;

export const LinkStyle = styled.div`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
`;
