import { useNavigate } from "react-router-dom";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const navigate = useNavigate();
  const { name, imageUrl, price, quantity, route } = cartItem;

  return (
    <CartItemContainer onClick={() => navigate(route)}>
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
