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
import OrderTextArea from '../../components/writeForm/OrderTextArea';

function Write() {
  const [image, setImage] = useState("");
  const [recipeRequest, setRecipeRequest] = useState({
    title: "",
    content: "",
    ingredientList: [{ name: '', quantity: '' }],
    sauceList: [{ name: '', quantity: '' }],
    recipeDescriptionList: [{ orderNumber: 1, description: '' }, { orderNumber: 2, description: '' }]
  });

  const navigate = useNavigate();

  const handleTextInputChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === 'ingredient') {
      const updatedIngredients = [...recipeRequest.ingredientList];
      updatedIngredients[index][name] = value;
      setRecipeRequest(prevState => ({
        ...prevState,
        ingredientList: updatedIngredients,
      }));
    } else if (type === 'sauce') {
      const updatedSauces = [...recipeRequest.sauceList];
      updatedSauces[index][name] = value;
      setRecipeRequest(prevState => ({
        ...prevState,
        sauceList: updatedSauces,
      }));
    } else if (type === 'order') {
      const updatedOrders = [...recipeRequest.recipeDescriptionList];
      updatedOrders[index][name] = value;
      setRecipeRequest(prevState => ({
        ...prevState,
        recipeDescriptionList: updatedOrders,
      }));
    } else {
      setRecipeRequest(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAddIngredient = () => {
    setRecipeRequest(prevState => ({
      ...prevState,
      ingredientList: [...prevState.ingredientList, { name: '', quantity: '' }]
    }));
  };
  
  const handleAddSauce = () => {
    setRecipeRequest(prevState => ({
      ...prevState,
      sauceList: [...prevState.sauceList, { name: '', quantity: '' }]
    }));
  };
  
  const handleAddOrder = () => {
    setRecipeRequest(prevState => ({
      ...prevState,
      recipeDescriptionList: [...prevState.recipeDescriptionList, { orderNumber: prevState.recipeDescriptionList.length + 1, description: '' }]
    }));
  };

  const handleWrite = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("image", image);

    formData.append(
      "recipeRequest",
      new Blob([JSON.stringify(recipeRequest)], { type: "application/json" })
    );
  
    recipeRequest.ingredientList.forEach((ingredient, index) => {
      formData.append(`ingredientList[${index}][name]`, ingredient.name);
      formData.append(`ingredientList[${index}][quantity]`, ingredient.quantity);
    });
  
    recipeRequest.sauceList.forEach((sauce, index) => {
      formData.append(`sauceList[${index}][name]`, sauce.name);
      formData.append(`sauceList[${index}][quantity]`, sauce.quantity);
    });
  
    recipeRequest.recipeDescriptionList.forEach((order, index) => {
      formData.append(`recipeDescriptionList[${index}][orderNumber]`, order.orderNumber);
      formData.append(`recipeDescriptionList[${index}][description]`, order.description);
    });
    
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

  return (
    <Template>
      <ContentWrapper>
        <Title>레시피 추천 Book</Title>
        <StyledForm onSubmit={(e) => handleWrite(e)}>
        <CenterWrapper>
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
                name="content"
                placeholder={"내용을 입력해주세요"}
                height="80px"
                style={{ marginTop: "10px", marginBottom: "10px" }}
                onChange={(e) => handleTextInputChange(e)}
              />
              <Subtitle>[재료]</Subtitle>
              {recipeRequest.ingredientList.map((ingredient, index) => (
                <IngredientWrapper key={index}>
                  <WriteInput
                    name="name"
                    placeholder="재료명"
                    style={{ width: "140px", marginRight: "15px" }}
                    onChange={(e) => handleTextInputChange(e, index, 'ingredient')}
                  />
                  <WriteInput
                    name="quantity"
                    placeholder="양(ex. 한 숟가락)"
                    style={{ width: "140px", marginRight: "15px" }}
                    onChange={(e) => handleTextInputChange(e, index, 'ingredient')}
                  />
                  {index === recipeRequest.ingredientList.length - 1 && (
                    <img src={AddContainerIcon} alt="재료 추가" onClick={handleAddIngredient} />
                  )}
                </IngredientWrapper>
              ))}
              <Subtitle>[양념]</Subtitle>
              {recipeRequest.sauceList.map((sauce, index) => (
                <SauceWrapper key={index}>
                  <WriteInput
                    name="name"
                    placeholder="양념명"
                    style={{ width: "140px", marginRight: "15px" }}
                    onChange={(e) => handleTextInputChange(e, index, 'sauce')}
                  />
                  <WriteInput
                    name="quantity"
                    placeholder="양(ex. 한 숟가락)"
                    style={{ width: "140px", marginRight: "15px" }}
                    onChange={(e) => handleTextInputChange(e, index, 'sauce')}
                  />
                  {index === recipeRequest.sauceList.length - 1 && (
                    <img src={AddContainerIcon} alt="양념 추가" onClick={handleAddSauce} />
                  )}
                </SauceWrapper>
              ))}
            </RightWrapper>
          </InputsWrapper>
        </CenterWrapper>
        <Subtitle2>[조리순서]</Subtitle2>
        <CenterWrapper>
            {recipeRequest.recipeDescriptionList.map((order, index) => (
              <OrderWrapper key={index}>
                <OrderNumber>{order.orderNumber}.</OrderNumber>
                <OrderTextArea
                  name="description"
                  placeholder={"내용을 입력해주세요 *상세하게 쓸수록 좋아요!"}
                  height="44px" 
                  onChange={(e) => handleTextInputChange(e, index, 'order')}
                />
                {index === recipeRequest.recipeDescriptionList.length - 1 && (
                  <img src={AddContainerIcon} alt="조리순서 추가" onClick={handleAddOrder} />
                )}
              </OrderWrapper>
            ))}
            <SubmitBtn bgColor="#ffe9c8" color="black"/>
          </CenterWrapper>
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


const OrderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 100px;
  width: 100%;
  max-width: 898px;
`;


const CenterWrapper = styled.div`
  margin-bottom: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

