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
import Icon from "../assets/ButtonIcon.svg";
import ButtonIcon from "../components/ButtonIcon";


function Home() {

  const todayFourItems = data.items.slice(0, 4);
  const todayThreeRecipes = RecipeData. recipeItems.slice(0, 3);
  const todayFourShares = ShareData. shareItems.slice(0, 4);
  
  return (
    <Template banner={<HomeBanner />}>
      <TitleWrapper>
      <Title>오늘의 농산물</Title>
      <ButtonIcon src={Icon} href="/market" />
      </TitleWrapper>
      <ItemWrapper4Grid>
        {todayFourItems.map((el) => (
          <HomeProductCard key={el.product} product={el} />
        ))}
      </ItemWrapper4Grid>
      
      <TitleWrapper>
      <Title>이 레시피는 어떠세요?</Title>
      <ButtonIcon src={Icon} href="/recipe" />
      </TitleWrapper>
      <ItemWrapper3Grid>
        {todayThreeRecipes.map((el) => (
          <HomeRecipeCard key={el.recipe} recipe={el} />
        ))}
      </ItemWrapper3Grid>

      <TitleWrapper>
      <Title>오늘의 나눔글</Title>
      <ButtonIcon src={Icon} href="/share" />
      </TitleWrapper>
      <ItemWrapper4Grid>
        {todayFourShares.map((el) => (
          <HomeShareCard key={el.share} share={el} />
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
  text-align: left;
`;

const TitleWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
text-align: left !important;
`;