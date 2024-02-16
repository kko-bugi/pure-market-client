import styled from "styled-components";

function ContentContent({ txt }) {
  return <StyledContent>{txt}</StyledContent>;
}

export default ContentContent;

const StyledContent = styled.div`
  font-size: 18px;
  min-height: 200px;
`;
