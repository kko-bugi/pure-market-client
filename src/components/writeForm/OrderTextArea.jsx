import styled from "styled-components";

function OrderTextArea({ name, placeholder, height, style, onChange }) {
  return (
    <StyledTextArea
      required
      name={name}
      placeholder={placeholder}
      height={height}
      styles={style}
      onChange={onChange}
    />
  );
}

export default OrderTextArea;

const StyledTextArea = styled.textarea`
color: #000;
background-color: #fff;
border-radius: 5px;
border: 1px solid #ddd3d3;
padding: 0 19px;
width: 100%;
max-width: 732px;
height: 50px;
outline: none;
resize: none;
margin-bottom: 10px;
line-height: 50px; 
margin-right: 14px;
`;



