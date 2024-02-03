import styled from "styled-components";

function DeleteBtn({ onClick }) {
  return <StyledBtn onClick={onClick}>삭제하기</StyledBtn>;
}

export default DeleteBtn;

const StyledBtn = styled.button`
  color: #888;
  font-size: 12px;
  font-weight: 500;
  background-color: white;
  padding: 0;
  border: none;
  position: absolute;
  bottom: 0;
  right: 0;
`;
