import React from "react";
import Template from "../components/Template";
import data from "../data/marketList.json"; /*오늘의 농산물*/
import RecipeData from "../data/recipeList.json"; /*이 레시피는 어떠세요*/
import ShareData from "../data/shareList.json";  /*오늘의 나눔글*/
import HomeBanner from "./HomeBanner";
import HomeProductCard from "./HomeProductCard";
import HomeRecipeCard from "./HomeRecipeCard";
import HomeShareCard from "./HomeShareCard";
import styled from "styled-components";

function Home() {

  const todayFourItems = data.items.slice(0, 4);
  const todayThreeRecipes = RecipeData. recipeItems.slice(0, 3);
  const todayFourShares = ShareData. items.slice(0, 4);
  
  return (
    <Template banner={<HomeBanner />}>
      <Title>오늘의 농산물</Title>
      <ItemWrapper4Grid>
        {todayFourItems.map((el) => (
          <HomeProductCard key={el.product} product={el} />
        ))}
      </ItemWrapper4Grid>
      
      <Title>이 레시피는 어떠세요?</Title>
      <ItemWrapper3Grid>
        {todayThreeRecipes.map((el) => (
          <HomeRecipeCard key={el.recipe} recipe={el} />
        ))}
      </ItemWrapper3Grid>

      <Title>오늘의 나눔글</Title>
      <ItemWrapper4Grid>
        {todayFourShares.map((el) => (
          <HomeShareCard key={el.product} product={el} />
        ))}

      </ItemWrapper4Grid>

    </Template>
  );
}

export default Home;

const ItemWrapper4Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 23px;
`;

const ItemWrapper3Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 23px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 300;
  color: #000;
  margin-bottom: 20px;
  text-align: left !important;
`;