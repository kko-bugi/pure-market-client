import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import instance from "../../axios_interceptor";

import Template from "../../components/Template";
import MiniProfile from "../../components/MiniProfile";
import ContentImg from "../../components/detail/ContentImg";
import ContentTitle from "../../components/detail/ContentTitle";
import ContentContent from "../../components/detail/ContentContent";
import ContentPrice from "./ContentPrice";

function Detailed() {
  const location = useLocation();

  if (location.state === null) {
    throw Error(404); // 존재하지 않는 페이지
  }

  const productIdx = location.state;
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await instance.get(`/produce/${productIdx}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProductInfo(res.data.result);
      } catch (e) {
        console.error(e);
      }
    };
    getProductData();
  }, []);

  return (
    <Template>
      <Wrapper>
        <Title>우리 지역 농산물 장터</Title>
        {!productInfo ? (
          <div>로딩중...</div>
        ) : (
          <ContentWrapper>
            <LeftWrapper>
              <ContentImg src={productInfo.produceImage} alt="" />
            </LeftWrapper>
            <RightWrapper>
              <MiniProfile
                profileImg={productInfo.profileImg}
                nickname={productInfo.nickname}
                contact={productInfo.contact}
              />
              <ContentTitle txt={productInfo.title} />
              <ContentContent txt={productInfo.content} />
              <ContentPrice price={productInfo.price} />
            </RightWrapper>
          </ContentWrapper>
        )}
      </Wrapper>
    </Template>
  );
}

export default Detailed;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  border-bottom: 3px solid #feb37a;
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
