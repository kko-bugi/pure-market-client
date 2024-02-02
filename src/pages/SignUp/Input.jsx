import styled from "styled-components";
import DuplicateCheckButton from "./DuplicateCheckButton";

const Input = ({ title, text, duplicate }) => {
  return (
    <Wrapper>
      <Title>
        {title}
        <span>*</span>
      </Title>
      <ContentsWrapper>
        <Text {...text}></Text>
        {duplicate && duplicate}
      </ContentsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 18px;
  span {
    color: #ff0000;
  }
  margin: 0;
`;

const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.input`
  border: none;
  border-bottom: 1px solid #bababa;
  padding: 3px 0px;
  flex: 1;
  &::placeholder {
    color: #bababa;
  }
  &:focus {
    outline: none;
  }
  margin-top: 10px;
`;

export default Input;
