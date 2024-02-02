import styled from "styled-components";

const DuplicateCheckButton = ({ ...props }) => {
  return <Button {...props}>중복 확인</Button>;
};

const Button = styled.button`
  width: 78px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #0a5226;
  background-color: white;
  font-size: 14px;
  font-family: inherit;
  color: #4da36f;
  cursor: pointer;
  margin-left: 15px;
  margin-bottom: 6px;

  &:hover {
    background-color: #d9d9d9;
  }

  &:disabled {
    background-color: #bababa;
    color: #666666;
    cursor: default;
    border: 1px solid #999999;
  }
`;

export default DuplicateCheckButton;
