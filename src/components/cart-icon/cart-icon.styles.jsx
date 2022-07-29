import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 2.3px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ItemCount = styled.span`
  margin-top: -20px;
  background-color: red;
  padding: 0 5px;
  border-radius: 100%;
  font-size: 14px;
  font-weight: bold;
  bottom: 12px;
`;
