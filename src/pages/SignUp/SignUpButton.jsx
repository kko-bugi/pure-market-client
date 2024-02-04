import styled from "styled-components";

const SignUpButton = ({ ...props }) => {
  return (
    <Wrapper>
      <Button {...props}>가입 완료하기</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 40px 0;
`;

const Button = styled.button`
  width: 360px;
  height: 60px;
  background-color: #8de6b4;
  border-radius: 37.5px;
  font-size: 20px;
  color: #ffffff;
  border: transparent;
  cursor: pointer;

  &:disabled {
    background-color: #d6e9dd;
    cursor: default;
  }
`;

export default SignUpButton;
