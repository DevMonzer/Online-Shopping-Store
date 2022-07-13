import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryContainer,
  DirectoryItemContainer,
} from "./directory.styles";

// Home Page
const DirectoryItem = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItemContainer
          key={category.id}
          onClick={() => navigate(category.route)}
        >
          <BackgroundImage imageUrl={category.imageUrl} />
          <Body>
            <h2>{category.title.toUpperCase()}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
      ))}
    </DirectoryContainer>
  );
};

export default DirectoryItem;
