import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function HomeRecipeCard({ recipe}) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/recipe/${recipe.recipeIdx}`, { state: recipe.recipeIdx });
  };
  
  return (
    <CardWrapper onClick={handleCardClick}>
      <RecipeItemImg src={recipe.recipeImage} alt="" />
      <RecipeItemName>{recipe.title}</RecipeItemName>
    </CardWrapper>
  );
}
    
export default HomeRecipeCard;

const CardWrapper = styled.div`
  max-width: 783px;
  display: inline-block;
  margin-bottom: 40px;
  margin-left: 7px;
  margin-right: 7px;
  vertical-align: top;
  position: relative;
  cursor: pointer;
`; 

const RecipeItemImg = styled.img`
  width: 247px;
  height: 135px;
  border-radius: 15px;
  object-fit: cover;
  filter: brightness(80%); 
`;

const  RecipeItemName = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  min-height: 39px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;   
  margin-left: 6px; 
  margin-right: 1px;
`;
