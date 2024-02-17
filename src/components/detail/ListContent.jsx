import styled from "styled-components";

function ListContent({ txt }) {
  return <StyledContent>{txt}</StyledContent>;
}

export default ListContent;

const StyledContent = styled.div`
  font-size: 18px;
`;