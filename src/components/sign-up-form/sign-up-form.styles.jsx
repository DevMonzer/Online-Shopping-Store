import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;

  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 380px;
  }

  @media screen and (max-width: 480px) {
    width: 350px;
  }

  h2 {
    margin: 10px 0;
  }
`;

export const Margin = styled.div`
  @media screen and (max-width: 400px) {
    margin-left: 20px;
  }
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkStyle = styled.div`
  min-width: 165px;
  width: 60%;
  height: 50px;
  margin: 20px auto;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    width: 60%;
    margin: 20px auto;
  }

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const ShowPassword = styled.div`
  position: absolute;
  margin-top: -70px;
  margin-left: 92%;

  @media screen and (max-width: 400px) {
    margin-left: 88%;
  }
`;
