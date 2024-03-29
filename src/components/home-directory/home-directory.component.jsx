import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryContainer,
  DirectoryItemContainer,
} from "./home-directory.styles";

// Home Page Categories (HATS, JACKETS, ...)
const HomeDirectory = ({ categories }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

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

export default HomeDirectory;
