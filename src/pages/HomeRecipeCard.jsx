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
  width: 100%; /* 텍스트가 이미지의 너비를 따라가도록 설정 */
  text-align: center; /* 텍스트를 가운데로 정렬 */
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;   
  margin-left: 6px; /* 텍스트 앞에 여백을 추가합니다. */
  margin-right: 1px;
`;
