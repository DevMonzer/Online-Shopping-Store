import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryContainer,
  DirectoryItemContainer,
} from "./directory.styles";

// Home Page
const Directory = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <DirectoryContainer>
      {categories.map((category) => {
        const { id, title, route, imageUrl } = category;

        return (
          <DirectoryItemContainer key={id} onClick={() => navigate(route)}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
              <h2>{title.toUpperCase()}</h2>
              <p>Shop Now</p>
            </Body>
          </DirectoryItemContainer>
        );
      })}
    </DirectoryContainer>
  );
};

export default Directory;
