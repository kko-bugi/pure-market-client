import styled from "styled-components";

const SoldOutBtn = ({ onClick }) => {
  return <StyledBtn onClick={onClick}>거래완료</StyledBtn>;
};

export default SoldOutBtn;

const StyledBtn = styled.button`
  color: #888;
  font-size: 12px;
  font-weight: 500;
  background-color: white;
  padding: 0;
  border: none;
  cursor: pointer;
`;
