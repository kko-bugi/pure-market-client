import React, { useEffect, useState } from "react";
import axios from "axios";
import Template from "../components/Template";
import HomeBanner from "./HomeBanner";
import HomeProductCard from "./HomeProductCard";
import HomeRecipeCard from "./HomeRecipeCard";
import HomeShareCard from "./HomeShareCard";
import styled from "styled-components";
import Icon from "../assets/ButtonIcon.svg";
import ButtonIcon from "../components/ButtonIcon";

function Home() {
  const [produceList, setProduceList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [giveawayList, setGiveawayList] = useState([]);

  useEffect(() => {
    axios.get("/home")
      .then(response => {
        const { produceList, recipeList, giveawayList } = response.data.result;
        setProduceList(produceList.slice(0, 4));
        setRecipeList(recipeList.slice(0, 3));
        setGiveawayList(giveawayList.slice(0, 4));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Template banner={<HomeBanner />}>
      <Wrapper>
        <TitleWrapper>
          <Title>오늘의 농산물</Title>
          <ButtonIcon src={Icon} href="/market" />
        </TitleWrapper>
        <ItemWrapper4Grid>
          {produceList.map(item => (
            <HomeProductCard key={item.produceIdx} product={item} />
          ))}
        </ItemWrapper4Grid>
      </Wrapper>

      <Wrapper>
        <TitleWrapper>
          <Title>이 레시피는 어떠세요?</Title>
          <ButtonIcon src={Icon} href="/recipe" />
        </TitleWrapper>
        <ItemWrapper3Grid>
          {recipeList.map(item => (
            <HomeRecipeCard key={item.recipeIdx} recipe={item} />
          ))}
        </ItemWrapper3Grid>
      </Wrapper>

      <Wrapper>
        <TitleWrapper>
          <Title>오늘의 나눔글</Title>
          <ButtonIcon src={Icon} href="/share" />
        </TitleWrapper>
        <ItemWrapper4Grid>
          {giveawayList.map(item => (
            <HomeShareCard key={item.giveawayIdx} product={item} />
          ))}
        </ItemWrapper4Grid>
        </Wrapper>
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

const TitleWrapper = styled.div`
display: flex;
align-items: center;
width: 65%;
`;


const Title = styled.h2`
  font-size: 22px;
  font-weight: 300;
  color: #000;
  margin-bottom: 20px;
`;

const Wrapper = styled.h2`
align-items: center;
`;