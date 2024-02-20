import styled from "styled-components";
import NavBar from "./NavBar";

function Template({ children, banner }) {
  return (
    <Wrapper>
      <NavBar />
      {banner && <>{banner}</>}
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
  padding: 51px 0;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  align-items: center;
`;
