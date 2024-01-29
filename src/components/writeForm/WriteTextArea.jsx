import styled from "styled-components";

function WriteTextArea({ name, placeholder, height, style }) {
  return (
    <StyledTextArea
      required
      name={name}
      placeholder={placeholder}
      height={height}
      styles={style}
    />
  );
}

export default WriteTextArea;

const StyledTextArea = styled.textarea`
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd3d3;
  padding: 19px;
  width: 100%;
  max-width: 376px;
  height: ${(props) => props.height};
  outline: none;
  resize: none;
  line-height: 171.429%;
  &::placeholder {
    color: #333;
  }
  ${(props) => props.styles}
`;
