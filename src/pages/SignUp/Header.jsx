import CloseIcon from "../../assets/CloseBtnImg.png";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header() {
  // X버튼을 위한 navigate
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <CloseBtn onClick={() => navigate(-1)}>
        <img src={CloseIcon} />
      </CloseBtn>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 0px;
  padding-bottom: 20px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  justify-self: center;
`;

const CloseBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  justify-self: end;
`;
