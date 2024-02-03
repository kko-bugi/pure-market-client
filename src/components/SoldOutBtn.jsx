import styled from "styled-components";

const SoldOutBtn = ({ onClick, isSoldOut }) => {
  const content = isSoldOut ? "판매재개 하기" : "판매완료 하기";
  return <StyledBtn onClick={onClick}>{content}</StyledBtn>;
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
