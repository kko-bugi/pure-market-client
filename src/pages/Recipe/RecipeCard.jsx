import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  return (
    <CardWrapper
      onClick={() => {
        navigate(`/recipe/${recipe.recipeIdx}`, {
            state: recipe.recipeIdx,
          });
        }}
      >
      <RecipeItemImg src={recipe.recipeImage} alt="" />
      <RecipeItemName>{recipe.title}</RecipeItemName>
    </CardWrapper>
  );
}

export default RecipeCard;

const CardWrapper = styled.a`
  max-width: 783px;
  cursor: pointer;
`;

const RecipeItemImg = styled.img`
  width: 224px;
  height: 224px;
  border-radius: 15px;
  margin-right: 20px
  object-fit: cover;
`;

const RecipeItemName = styled.div`
  color: #000;
  font-size: 14px;
  min-height: 39px;
  max-width: 224px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;