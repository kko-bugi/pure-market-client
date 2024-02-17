import styled from "styled-components";
import Template from "../../components/Template";
import MiniProfile from "../../components/MiniProfile";
import WriteInput from "../../components/writeForm/WriteInput";
import WriteTextArea from "../../components/writeForm/WriteTextArea";
import SubmitBtn from "../../components/writeForm/SubmitBtn";
import WriteImgInput from "../../components/writeForm/WriteImgInput";

import { useState } from "react";
import instance from "../../axios_interceptor";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [image, setImage] = useState(null);
  const [giveawayRequest, setGiveawayRequest] = useState({
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  const handleTextInputChange = (e) => {
    setGiveawayRequest({
      ...giveawayRequest,
      [e.target.name]: e.target.value,
    });
  };

  const handleWrite = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append(
      "giveawayRequest",
      new Blob([JSON.stringify(giveawayRequest)], { type: "application/json" })
    );

    try {
      const res = await instance.post("/giveaway", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/share");
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Template>
      <ContentWrapper>
        <Title>우리 지역 나눔 장터</Title>
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
                name="content"
                placeholder={
                  "내용을 입력해주세요\n*무게, 개수, 상태 등 자세한 설명을 남길 수록 좋아요!"
                }
                height="193px"
                style={{ marginTop: "11px", marginBottom: "19px" }}
                onChange={(e) => handleTextInputChange(e)}
              />
            </RightWrapper>
          </InputsWrapper>
          <SubmitBtn bgColor="#83C1FC" />
        </StyledForm>
      </ContentWrapper>
    </Template>
  );
};

export default Write;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  border-bottom: 3px solid #83c1fc;
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
