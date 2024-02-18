import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../../axios_interceptor";

import Template from "../../components/Template";
import MiniProfile from "../../components/MiniProfile";
import ContentImg from "../../components/detail/ContentImg";
import ContentTitle from "../../components/detail/ContentTitle";
import ContentContent from "../../components/detail/ContentContent";
import PostControlBtn from "../../components/PostControlBtn";

function Detailed() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.state === null) {
    throw Error(404); // 존재하지 않는 페이지
  }

  const productIdx = location.state;
  const [productInfo, setProductInfo] = useState(null);
  const getProductData = async () => {
    try {
      const res = await instance.get(`/giveaway/${productIdx}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProductInfo(res.data.result);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async () => {
    try {
      await instance.patch(`/giveaway?giveawayIdx=${productIdx}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/share");
    } catch (e) {
      console.error(e);
    }
  };

  const handleStatusChange = async () => {
    try {
      await instance.patch(`/giveaway/${productIdx}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      await getProductData();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <Template>
      <Wrapper>
        <Title>우리 지역 나눔 장터</Title>
        {!productInfo ? (
          <div>로딩중...</div>
        ) : (
          <ContentWrapper>
            <LeftWrapper>
              <ContentImg
                src={productInfo.giveawayImage}
                alt=""
                status={productInfo.giveawayStatus}
              />
            </LeftWrapper>
            <RightWrapper>
              <UserWrapper>
                <MiniProfile
                  profileImg={productInfo.profileImage}
                  nickname={productInfo.nickname}
                  contact={productInfo.contact}
                />
                {productInfo.isWriter && (
                  <PostControlBtn
                    status={productInfo.giveawayStatus}
                    handleDelete={handleDelete}
                    toggleSoldOut={handleStatusChange}
                  />
                )}
              </UserWrapper>

              <ContentTitle txt={productInfo.title} />
              <ContentContent txt={productInfo.content} />
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

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
