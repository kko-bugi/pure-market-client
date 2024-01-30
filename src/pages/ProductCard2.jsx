import styled from "styled-components";

function ProductCard2({ recipe}) {
  return (
    <CardWrapper href="">
      <RecipeItemImg src={recipe.img} alt="" />
      <RecipeItemName>{recipe.name}</RecipeItemName>
    </CardWrapper>
  );
}

export default ProductCard2;

const CardWrapper = styled.div`
  max-width: 783px;
  display: inline-block;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  vertical-align: top;
  position: relative;
`; 

const RecipeItemImg = styled.img`
  width: 247px;
  height: 135px;
  border-radius: 15px;
  object-fit: cover;
`;

const  RecipeItemName = styled.div`
  color: #ffffff;
  font-size: 16px;
  min-height: 39px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis; 
`;
