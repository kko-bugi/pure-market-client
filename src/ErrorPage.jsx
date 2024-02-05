import { Link, useNavigate, useRouteError } from "react-router-dom";
import styled from "styled-components";
import Template from "./components/Template";
import ErrorImg from "./assets/ErrorImg.png";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Template>
      <StyledImg src={ErrorImg} alt="" />
      <ErrorTitle>길을 잃으셨나요?</ErrorTitle>
      <ErrorContent>
        여기에 당신과 저 빼고는 아무도 없는 것 같아요
        <br />
        Error: {error.statusText || error.message}
      </ErrorContent>
      <BtnsWrapper>
        <MainBtn onClick={() => navigate("/")}>메인으로</MainBtn>
        <PrevBtn onClick={() => navigate(-1)}>이전으로</PrevBtn>
      </BtnsWrapper>
    </Template>
  );
}

const StyledImg = styled.img`
  max-width: 609px;
  max-height: 343px;
`;

const ErrorTitle = styled.h1`
  color: #feb37a;
  font-size: 24px;
  font-weight: 600;
  line-height: 175%;
  margin: 0;
`;
const ErrorContent = styled.p`
  color: #8e8e8e;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 0;
`;
const BtnsWrapper = styled.div`
  display: flex;
  gap: 22px;
`;
const StyledButton = styled.button`
  width: 157px;
  height: 42px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  line-height: 171.5%;
  outline: none;
  margin-top: 42px;
  cursor: pointer;
`;
const MainBtn = styled(StyledButton)`
  background-color: #feb37a;
  color: white;
  border: none;
`;
const PrevBtn = styled(StyledButton)`
  background-color: white;
  color: #feb37a;
  border: 1px solid #feb37a;
`;
