import styled from "styled-components";

function SubmitBtn({ onClick, bgColor, color = "white" }) {
  return (
    <StyledBtn type="submit" onClick={onClick} bgColor={bgColor} color={color}>
      작성 완료하기
    </StyledBtn>
  );
}

export default SubmitBtn;

const StyledBtn = styled.button`
  width: 781px;
  margin-top: 77px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: 18px;
  outline: none;
`;
