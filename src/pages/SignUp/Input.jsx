import styled from "styled-components";

const Input = ({ title, text, duplicate, errorMsg, passMsg }) => {
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
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      {passMsg && <PassMsg>{passMsg}</PassMsg>}
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

const ErrorMsg = styled.span`
  color: red;
  font-size: 13px;
`;

const PassMsg = styled.span`
  color: green;
  font-size: 13px;
`;

export default Input;
