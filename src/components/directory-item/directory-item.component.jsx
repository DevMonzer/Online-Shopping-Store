import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryContainer,
  DirectoryItemContainer,
} from "./directory-item.styles";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl:
      "https://unsplash.com/photos/V0OsHPIh4To/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8aGF0cyUyMGNvbGxlY3Rpb258ZW58MHx8fHwxNjU1OTY4NjI3&force=true&w=640ntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://unsplash.com/photos/jddw6iA31sE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8amFja2V0cyUyMGNvbGxlY3Rpb258ZW58MHx8fHwxNjU1OTY4NzM1&force=true&w=640",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "women",
    imageUrl:
      "https://unsplash.com/photos/xXJ6utyoSw0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fHx8MTY1NTk2ODM4OA&force=true&w=640",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "men",
    imageUrl:
      "https://unsplash.com/photos/5hDqrxz5Rpc/download?force=true&w=640",
    route: "shop/mens",
  },
  {
    id: 6,
    title: "kids",
    imageUrl:
      "https://unsplash.com/photos/r_Tnjj6TB30/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGNoaWxkJTIwY2xvdGhlc3xlbnwwfHx8fDE2NTU5OTAyMjQ&force=true&w=640",
    route: "shop/kids",
  },
];

// Home Page
const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryContainer>
      <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl} />
        <Body>
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
