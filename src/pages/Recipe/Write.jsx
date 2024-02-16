import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 
import styled from "styled-components";
import instance from "../../axios_interceptor";
import { useNavigate } from "react-router-dom";

import Template from "../../components/Template";
import MiniProfile from "../../components/MiniProfile";
import ContentImg from "../../components/detail/ContentImg";
import ContentTitle from "../../components/detail/ContentTitle";
import ContentContent from "../../components/detail/ContentContent";
import DeleteBtn from "../../components/DeleteBtn";
import ListContent from "../../components/detail/ListContent";


  
function Detailed() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.state === null) {
    throw Error(404); // 존재하지 않는 페이지
  }

  const recipeIdx = location.state;
  const [recipeInfo, setRecipeInfo] = useState(null);

  const getRecipeData = async () => {
    try {
      const res = await instance.get(`/recipe/${recipeIdx}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setRecipeInfo(res.data.result);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async () => {
    try {
      await instance.patch(`/recipe/${recipeIdx}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/recipe");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getRecipeData();
  }, []);


  return (
    <Template>
      <Wrapper>
        <Title>레시피 추천 Book</Title>
        {recipeInfo ? (
          <ContentWrapper>
            <LeftWrapper>
              <ContentImg src={recipeInfo.recipeImage} alt="" />
            </LeftWrapper>

            <RightWrapper>
              <UserWrapper>
                <MiniProfile
                  profileImg={recipeInfo.profileImage}
                  nickname={recipeInfo.nickname}
                  contact={recipeInfo.contact}
                />
                {recipeInfo.isWriter && (
                  <DeleteBtn onClick={handleDelete} />
                )}
              </UserWrapper>
              <ContentTitle txt={recipeInfo.title} />
              <ContentContent txt={recipeInfo.content} />

              <SubtitleWrapper>
                <Subtitle>[재료]&nbsp;</Subtitle>
                {recipeInfo.ingredientList.map((ingredient, index) => (
                <React.Fragment key={index}>
                    <ListContent txt={`${ingredient.name}${ingredient.quantity ? `: ${ingredient.quantity}` : ''}`}  />
                    {index !== recipeInfo.ingredientList.length - 1 && <>,&nbsp;&nbsp;</>}
                </React.Fragment>
                ))}
              </SubtitleWrapper>

              <SubtitleWrapper>
                <Subtitle>[양념]&nbsp;</Subtitle>
                {recipeInfo.sauceList.map((sauce, index) => (
                  <React.Fragment key={index}>
                    <ListContent txt={`${sauce.name}${sauce.quantity ? `: ${sauce.quantity}` : ''}`}  />
                    {index !== recipeInfo.sauceList.length - 1 && <>,&nbsp;&nbsp;</>}
                </React.Fragment>
                ))}
              </SubtitleWrapper>

            </RightWrapper>
          </ContentWrapper>
        ) : (
          <div>로딩중...</div>
        )}

        {recipeInfo && (
          <>
            <Subtitle2>[조리순서]</Subtitle2>
            <OrderBox>
              {recipeInfo.recipeDescriptionList.map((step, index) => (
                <OrderWrapper key={index}>
                  <OrderNumber>{`${step.orderNumber}.`}&nbsp;</OrderNumber>
                  <ListContent txt={step.description} />
                </OrderWrapper>
              ))}
            </OrderBox>
          </>
        )}
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

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;