import styled from "styled-components";
import NavBar from "./NavBar";

function Template({ children }) {
  return (
    <Wrapper>
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
}

export default Template;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 51px;
  position: fixed;
  top: 0;
  bottom: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
