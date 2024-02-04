import styled from "styled-components";
import DeleteBtn from "./DeleteBtn";
import SoldOutBtn from "./SoldOutBtn";

const PostControlBtn = ({ isSoldOut, toggleSoldOut }) => {
  return (
    <Wrapper>
      <DeleteBtn />
      <VerticalBar>|</VerticalBar>
      <SoldOutBtn isSoldOut={isSoldOut} toggleSoldOut={toggleSoldOut} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;

const VerticalBar = styled.span`
  color: #888;
  font-weight: 500;
  font-size: 12px;
  margin: 0 13px;
`;

export default PostControlBtn;
