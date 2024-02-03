import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Template from "../../components/Template";
import MiniProfile from "../../components/MiniProfile";
import ContentImg from "../../components/detail/ContentImg";
import ContentTitle from "../../components/detail/ContentTitle";
import ContentContent from "../../components/detail/ContentContent";
import BtnForMine from "../../components/BtnForMine";

function Detailed() {
  const location = useLocation();
  const productInfo = { ...location.state };
  return (
    <Template>
      <Wrapper>
        <Title>우리 지역 나눔 장터</Title>
        <ContentWrapper>
          <LeftWrapper>
            <ContentImg
              src={productInfo.img}
              alt=""
              isSoldOut={productInfo.isSoldOut}
            />
          </LeftWrapper>
          <RightWrapper>
            <MiniProfile />
            <ContentTitle txt={productInfo.name} />
            <ContentContent txt={productInfo.description} />
            {productInfo.isMine && (
              <BtnForMine isSoldOut={productInfo.isSoldOut} />
            )}
          </RightWrapper>
        </ContentWrapper>
      </Wrapper>
    </Template>
  );
}

export default Detailed;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  border-bottom: 3px solid #83c1fc;
  margin-bottom: 32px;
  width: fit-content;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 898px;
  height: 100%;
  padding-top: 46px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 66px;
  width: 100%;
`;

const LeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 416px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const RightWrapper = styled.div`
  width: 100%;
`;
