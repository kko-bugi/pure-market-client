import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import Template from "../../components/Template";
import RecipeBanner from "./RecipeBanner";
import RecipeCard from "./RecipeCard";
import Icon from "../../assets/RecipeAddIcon.svg";
import AddIcon from "../../components/AddIcon";

function Recipe() {
  const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    const getRecipeList = async () => {
      try {
        await axios.get("/recipe").then((res) => {
          setRecipeList(res.data.result.recipeList);
        });
      } catch (e) {
        console.error(e);
      }
    };
    getRecipeList();
  }, []);

  return (
    <Template banner={<RecipeBanner />}>
      <ContentWrapper>
        <ItemWrapper>
          {recipeList.map((el, i) => (
            <RecipeCard key={el.recipeIdx} recipe={el} />
          ))}
        </ItemWrapper>
        <AddIcon src={Icon} href="/recipe/write" />
      </ContentWrapper>
    </Template>
  );
}

export default Recipe;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 23px;
`;
const ContentWrapper = styled.div`
  height: 100%;
  margin-top: 54px;
`;