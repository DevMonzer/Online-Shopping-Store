import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

import { setIsCartOpen } from "../../store/cart/cart.action.js";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (productRoute) => {
    navigate(productRoute);
    dispatch(setIsCartOpen(false));
  };

  const { name, imageUrl, price, quantity, route } = cartItem;

  return (
    <CartItemContainer onClick={() => handleNavigate(route)}>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
