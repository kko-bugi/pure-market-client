import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Template from "../../components/Template";
import MiniProfile from "../../components/MiniProfile";
import ContentImg from "../../components/detail/ContentImg";
import ContentTitle from "../../components/detail/ContentTitle";
import ContentContent from "../../components/detail/ContentContent";

function Detailed() {
  const location = useLocation();
  if (location.state === null) throw Error(404); // 존재하지 않는 페이지

  const recipeInfo = { ...location.state };

  return (
    <Template>
      <Wrapper>
        <Title>레시피 추천 Book</Title>
        <ContentWrapper>
          <LeftWrapper>
            <ContentImg src={recipeInfo.img} alt="" />
          </LeftWrapper>
          <RightWrapper>
            <MiniProfile />
            <ContentTitle txt={recipeInfo.name} />
            <ContentContent txt={recipeInfo.description} /><br/>
            
            <SubtitleWrapper>
            <Subtitle>[재료]&nbsp;</Subtitle>
            <ContentContent txt={recipeInfo. ingredient}/><br/>
            </SubtitleWrapper>
            <SubtitleWrapper>
            <Subtitle>[양념]&nbsp;</Subtitle>
            <ContentContent txt={recipeInfo. sauce}/>
            </SubtitleWrapper>

          </RightWrapper>
          </ContentWrapper>

          <Subtitle2>[조리순서]</Subtitle2>
          <OrderBox>
            <OrderWrapper>
                <OrderNumber>1.&nbsp;</OrderNumber>
                <ContentContent txt={recipeInfo.order} />
            </OrderWrapper>
        </OrderBox>
        
      </Wrapper>
    </Template>
  );
}

export default Detailed;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  border-bottom: 3px solid #ffe9c8;
  margin-bottom: 32px;
  width: fit-content;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 898px;
  height: 100%;
  padding-top: 46px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 66px;
  width: 100%;
`;

const LeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 416px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const RightWrapper = styled.div`
  width: 100%;
`;

const Subtitle = styled.div`
 font-size: 18px;
 font-weight: bold;
`;

const SubtitleWrapper = styled.div`
 display: flex;
`;

const Subtitle2 = styled.div`
 font-size: 22px;
 font-weight: bold;
 margin-top: 30px;
`;

const OrderBox = styled.div`
 background-color: #ffe9c8;
 width: 100%;
 height: 531px; 
 padding: 20px; 
 box-sizing: border-box; 
 margin-top: 10px;
`;

const OrderWrapper = styled.div`
 display: flex;
 align-items: center; 
 justify-content: center; 
 margin-top: 10px;
`;

const OrderNumber = styled.div`
 font-size: 18px;
`;
