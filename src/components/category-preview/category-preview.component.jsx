import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
  Center,
} from "./category-preview.styles";

// Shop Page
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Center>
        <Title to={title}>{title.toUpperCase()}</Title>
      </Center>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
