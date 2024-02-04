import styled from "styled-components";

function ProductCard2({ recipe }) {
  return (
    <CardWrapper href="">
      <RecipeItemImg src={recipe.img} alt="" />
      <RecipeItemName>{recipe.name}</RecipeItemName>
    </CardWrapper>
  );
}

export default ProductCard2;

const CardWrapper = styled.a`
  max-width: 783px;
`;

const RecipeItemImg = styled.img`
  width: 224px;
  height: 224px;
  border-radius: 15px;
  margin-right: 3px
  object-fit: cover;
`;

const RecipeItemName = styled.div`
  color: #000;
  font-size: 12px;
  min-height: 39px;
`;