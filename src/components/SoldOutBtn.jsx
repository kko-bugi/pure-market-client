import styled from "styled-components";

const SoldOutBtn = ({ toggleSoldOut, status }) => {
  const setStatus = () => {
    switch (status) {
      case "판매중":
        status = "판매완료";
        break;
      case "나눔중":
        status = "나눔완료";
        break;
      case "판매완료":
        status = "판매재개";
        break;
      case "나눔완료":
        status = "나눔재개";
        break;
    }
  };
  setStatus();

  return <StyledBtn onClick={toggleSoldOut}>{status} 하기</StyledBtn>;
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
