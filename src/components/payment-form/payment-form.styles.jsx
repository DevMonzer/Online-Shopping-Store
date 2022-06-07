import styled from "styled-components";

import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    min-width: 400px;
  }

  @media screen and (max-width: 480px) {
    min-width: 380px;
  }

  @media screen and (max-width: 400px) {
    min-width: 360px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
