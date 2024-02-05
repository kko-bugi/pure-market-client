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
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  flex: 1;
`;

const CloseBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
