import axios from "axios";
import React, { useState } from 'react';
import styled from "styled-components";
import Template from "../../components/Template";
import MiniProfile from "../../components/MiniProfile";
import WriteInput from "../../components/writeForm/WriteInput";
import WriteTextArea from "../../components/writeForm/WriteTextArea";
import SubmitBtn from "../../components/writeForm/SubmitBtn";
import WriteImgInput from "../../components/writeForm/WriteImgInput";
import AddContainerIcon from "../../assets/AddContainerIcon.svg";

function Write() {
  const [image, setImage] = useState("");
  const [produceRequest, setProduceRequest] = useState({
    title: "",
    description: "",
    ingredients: [{ name: '', quantity: '' }],
    sauces: [{ name: '', quantity: '' }],
    orders: [{ order: '' }]
  });

  const { ingredients, sauces, orders } = produceRequest;

  const handleWrite = async (e) => {
    e.preventDefault();
    try {
      const data = {
        image: image,
        produceRequest: {
          title: produceRequest.title,
          description: produceRequest.description,
          ingredients: produceRequest.ingredients,
          sauces: produceRequest.sauces,
          orders: produceRequest.orders
        }
      };
      const res = await axios.post("/produce", data, {
        headers: {
        }
      });
      
      console.log("글이 성공적으로 등록되었습니다.");
      window.location.href = '/recipe';
    } catch (error) {
      console.error("글 등록에 실패했습니다:", error);
    }
  };

  const handleAddIngredient = () => {
    setProduceRequest(prevState => ({
      ...prevState,
      ingredients: [...prevState.ingredients, { name: '', quantity: '' }]
    }));
  };

  const handleAddSauce = () => {
    setProduceRequest(prevState => ({
      ...prevState,
      sauces: [...prevState.sauces, { name: '', quantity: '' }]
    }));
  };

  const handleAddOrder = () => {
    setProduceRequest(prevState => ({
      ...prevState,
      orders: [...prevState.orders, { order: '' }]
    }));
  };



  return (
    <Template>
      <ContentWrapper>
        <Title>레시피 추천 Book</Title>
        <StyledForm action="">
          <InputsWrapper>

            <LeftWrapper>
              <WriteImgInput />
            </LeftWrapper>

            <RightWrapper>
              <MiniProfile />
              <WriteInput
                name="title"
                placeholder="제목을 입력해주세요."
                style={{ marginTop: "23px" }}
              />
              <WriteTextArea
                name="description"
                placeholder={
                  "내용을 입력해주세요"
                }
                height="80px"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              />

              <Subtitle>[재료]</Subtitle>
              {ingredients.map((ingredient, index) => (
                <IngredientWrapper key={index}>
                  <WriteInput
                    name="ingredient"
                    placeholder="재료명"
                    style={{ width: "140px", marginRight: "15px" }}
                  />
                  <WriteInput
                    name="ingredient"
                    placeholder="양(ex. 한 숟가락)"
                    style={{ width: "140px", marginRight: "15px" }}
                  />
                  {index === ingredients.length - 1 && (
                    <img src={AddContainerIcon} alt="재료 추가" onClick={handleAddIngredient} />
                  )}
                </IngredientWrapper>
              ))}


                <Subtitle>[양념]</Subtitle>
                {sauces.map((sauce, index) => (
                    <SauceWrapper key={index}>
                        <WriteInput
                        name="sauce"
                        placeholder="재료명"
                        style={{ width: "140px", marginRight: "15px" }}
                        />
                        <WriteInput
                        name="sauce"
                        placeholder="양(ex. 한 숟가락)"
                        style={{ width: "140px", marginRight: "15px" }}
                        />
                        {index === sauces.length - 1 && (
                            <img src={AddContainerIcon} alt="양념 재료 추가" onClick={handleAddSauce} />
                        )}
                    </SauceWrapper>
                    ))}
            </RightWrapper>
          </InputsWrapper>
        </StyledForm>

        <Subtitle2>[조리순서]</Subtitle2>
        <StyledForm action="">
          {orders.map((order, index) => (
            <OrderWrapper key={index}>
                <OrderNumber>{index + 1}.</OrderNumber>
                <OrderTextArea
                    name="order"
                    placeholder={ "내용을 입력해주세요 *상세하게 쓸수록 좋아요!"}
                    height="44px" 
                />
                {index === orders.length - 1 && (
                    <img src={AddContainerIcon} alt="조리순서 추가" onClick={handleAddOrder} />
                )}
            </OrderWrapper>
            ))}
          <SubmitBtn onClick={() => {}} bgColor="#ffe9c8" color="black"/>
        </StyledForm>
      </ContentWrapper>
    </Template>
  );
}

export default Write;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  border-bottom: 3px solid #ffe9c8;
  margin-bottom: 32px;
  width: fit-content;
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 898px;
  height: 100%;
  padding-top: 46px;
`;

const LeftWrapper = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 416px;
`;

const RightWrapper = styled.div`
  width: 100%;
`;

const StyledForm = styled.form`
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 66px;
  width: 100%;
`;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  width: fit-content;
  text-align: left;
`;

const IngredientWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
`;

const SauceWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
`;

const Subtitle2 = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  width: fit-content;
  text-align: left;
  margin-left: 50px;
`;

const OrderNumber = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-right: 8px;
  height: 50px;
`;

const OrderTextArea = styled.textarea`
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd3d3;
  padding: 0 19px;
  width: 100%;
  max-width: 732px;
  height: 50px;
  outline: none;
  resize: none;
  margin-bottom: 10px;
  line-height: 50px; 
  margin-right: 14px;
`;

const OrderWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 10px;
margin-left: 100px;
width: 100%;
max-width: 898px;
`;

