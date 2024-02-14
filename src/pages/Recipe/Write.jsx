import React, { useState } from 'react';
import styled from "styled-components";
import instance from "../../axios_interceptor";
import { useNavigate } from "react-router-dom";

import Template from "../../components/Template";
import MiniProfile from "../../components/MiniProfile";
import WriteInput from "../../components/writeForm/WriteInput";
import WriteTextArea from "../../components/writeForm/WriteTextArea";
import SubmitBtn from "../../components/writeForm/SubmitBtn";
import WriteImgInput from "../../components/writeForm/WriteImgInput";
import AddContainerIcon from "../../assets/AddContainerIcon.svg";

function Write() {
  const [image, setImage] = useState("");
  const [recipeRequest, setRecipeRequest] = useState({
    title: "",
    description: "",
    ingredients: [{ name: '', quantity: '' }],
    sauces: [{ name: '', quantity: '' }],
    orders: [{ order: '' }]
  });

  const navigate = useNavigate();

  const handleTextInputChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === 'ingredient') {
      const updatedIngredients = [...recipeRequest.ingredients];
      updatedIngredients[index][name] = value;
      setRecipeRequest({
        ...recipeRequest,
        ingredients: updatedIngredients,
      });
    } else if (type === 'sauce') {
      const updatedSauces = [...recipeRequest.sauces];
      updatedSauces[index][name] = value;
      setRecipeRequest({
        ...recipeRequest,
        sauces: updatedSauces,
      });
    } else if (type === 'order') {
      const updatedOrders = [...recipeRequest.orders];
      updatedOrders[index][name] = value;
      setRecipeRequest({
        ...recipeRequest,
        orders: updatedOrders,
      });
    } else {
      setRecipeRequest({
        ...recipeRequest,
        [name]: value,
      });
    }
  };

  const handleWrite = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", recipeRequest.title);
    formData.append("description", recipeRequest.description);
    formData.append("ingredients", JSON.stringify(recipeRequest.ingredients));
    formData.append("sauces", JSON.stringify(recipeRequest.sauces));
    formData.append("orders", JSON.stringify(recipeRequest.orders));
  
    try {
      const res = await instance.post("/recipe", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      navigate("/recipe");
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddIngredient = () => {
    setRecipeRequest(prevState => ({
      ...prevState,
      ingredients: [...prevState.ingredients, { name: '', quantity: '' }]
    }));
  };
  
  const handleAddSauce = () => {
    setRecipeRequest(prevState => ({
      ...prevState,
      sauces: [...prevState.sauces, { name: '', quantity: '' }]
    }));
  };
  
  const handleAddOrder = () => {
    setRecipeRequest(prevState => ({
      ...prevState,
      orders: [...prevState.orders, { order: '' }]
    }));
  };



  return (
    <Template>
      <ContentWrapper>
        <Title>레시피 추천 Book</Title>
        <StyledForm onSubmit={(e) => handleWrite(e)}>
          <InputsWrapper>

            <LeftWrapper>
              <WriteImgInput setImage={setImage} />
            </LeftWrapper>

            <RightWrapper>
              <MiniProfile />
              <WriteInput
                name="title"
                placeholder="제목을 입력해주세요."
                style={{ marginTop: "23px" }}
                onChange={(e) => handleTextInputChange(e)}
                />
              <WriteTextArea
                name="description"
                placeholder={
                  "내용을 입력해주세요"
                }
                height="80px"
                style={{ marginTop: "10px", marginBottom: "10px" }}
                onChange={(e) => handleTextInputChange(e)}
              />

              <Subtitle>[재료]</Subtitle>
              {recipeRequest.ingredients.map((ingredient, index) => (
                <IngredientWrapper key={index}>
                  <WriteInput
                    name="ingredient"
                    placeholder="재료명"
                    style={{ width: "140px", marginRight: "15px" }}
                    onChange={(e) => handleTextInputChange(e)}
                  />
                  <WriteInput
                    name="ingredient"
                    placeholder="양(ex. 한 숟가락)"
                    style={{ width: "140px", marginRight: "15px" }}
                    onChange={(e) => handleTextInputChange(e)}
                  />
                  {index === recipeRequest.ingredients.length - 1 && (
                    <img src={AddContainerIcon} alt="재료 추가" onClick={handleAddIngredient} />
                  )}
                </IngredientWrapper>
              ))}


                <Subtitle>[양념]</Subtitle>
                {recipeRequest.sauces.map((sauce, index) => (
                    <SauceWrapper key={index}>
                        <WriteInput
                          name="sauce"
                          placeholder="재료명"
                          style={{ width: "140px", marginRight: "15px" }}
                          onChange={(e) => handleTextInputChange(e)}
                        />
                        <WriteInput
                          name="sauce"
                          placeholder="양(ex. 한 숟가락)"
                          style={{ width: "140px", marginRight: "15px" }}
                          onChange={(e) => handleTextInputChange(e)}
                        />
                        {index === recipeRequest.sauces.length - 1 && (
                            <img src={AddContainerIcon} alt="양념 재료 추가" onClick={handleAddSauce} />
                        )}
                    </SauceWrapper>
                    ))}
            </RightWrapper>
          </InputsWrapper>
        </StyledForm>

        <Subtitle2>[조리순서]</Subtitle2>
        <StyledForm onSubmit={(e) => handleWrite(e)}>
        {recipeRequest.orders.map((order, index) => (
            <OrderWrapper key={index}>
                <OrderNumber>{index + 1}.</OrderNumber>
                <OrderTextArea
                    name="order"
                    placeholder={ "내용을 입력해주세요 *상세하게 쓸수록 좋아요!"}
                    height="44px" 
                    onChange={(e) => handleTextInputChange(e)}
                 />
                 {index === recipeRequest.orders.length - 1 && (
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

