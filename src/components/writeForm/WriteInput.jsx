import styled from "styled-components";

function WriteInput({
  type = "text",
  name,
  placeholder,
  height,
  style,
  onChange,
}) {
  return (
    <StyledInput
      required
      name={name}
      autoFocus={true}
      type={type}
      placeholder={placeholder}
      height={height}
      style={style}
      onChange={onChange}
    />
  );
}

export default WriteInput;

const StyledInput = styled.input`
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd3d3;
  padding: 0 19px;
  width: 100%;
  max-width: 376px;
  height: 44px;
  outline: none;
  &::placeholder {
    color: #333;
    font-size: 14px;
  }
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${(props) => props.style}
`;
