import styled from "styled-components";
import Template from "../../components/Template";
import RecipeBanner from "./RecipeBanner";
import RecipeData from "../../data/recipeList.json";
import RecipeCard from "./RecipeCard";
import Icon from "../../assets/RecipeAddIcon.svg";
import AddIcon from "../../components/AddIcon";

function Recipe() {
  return (
    <Template banner={<RecipeBanner />}>
      <ItemWrapper>
        {RecipeData. recipeItems.map((el) => (
          <RecipeCard key={el.recipe} recipe={el} />
        ))}
      </ItemWrapper>
      <AddIcon src={Icon} href="/recipe/write" />
    </Template>
  );
}

export default Recipe;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 23px;
`;
