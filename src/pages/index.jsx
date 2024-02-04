import React from "react";
import Template from "../components/Template";
import data from "../data/marketList.json"; /*오늘의 농산물 리스트, ProductCard*/
import RecipeData from "../data/recipeList.json"; /*이 레시피는 어떠세요 리스트, ProductCard2*/
import ShareData from "../data/shareList.json";  /*오늘의 나눔글 리스트, ProductCard3*/
import HomeBanner from "./HomeBanner";
import ProductCard from "./HomeProductCard";
import RecipeCard from "./HomeRecipeCard";
import ShareCard from "./HomeShareCard";
import styled from "styled-components";

import Icon from "../assets/ButtonIcon.png";

function Home() {

  const todayFourItems = data.items.slice(0, 4);
  const todayThreeRecipes = RecipeData. recipeItems.slice(0, 3);
  const todayFourShares = ShareData. shareItems.slice(0, 4);
  
  return (
    <Template banner={<HomeBanner />}>
      <Title>오늘의 농산물</Title>
      <ItemWrapper>
        {todayFourItems.map((el) => (
          <ProductCard key={el.product} product={el} />
        ))}
      </ItemWrapper>
      
      <Title>이 레시피는 어떠세요?</Title>
      <ItemWrapper2>
        {todayThreeRecipes.map((el) => (
          <RecipeCard key={el.recipe} recipe={el} />
        ))}
      </ItemWrapper2>

      <Title>오늘의 나눔글</Title>
      <ItemWrapper>
        {todayFourShares.map((el) => (
          <ShareCard key={el.share} share={el} />
        ))}

      </ItemWrapper>

    </Template>
  );
}

export default Home;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 23px;
`;

const ItemWrapper2 = styled.div`
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