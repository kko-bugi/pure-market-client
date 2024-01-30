import styled from "styled-components";

function ContentTitle({ txt }) {
  return <StyledTitle>{txt}</StyledTitle>;
}

export default ContentTitle;

const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 26px;
`;
