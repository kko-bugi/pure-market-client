import styled from "styled-components";
import UserRecentPostCard from "./UserRecentPostCard";
import DefaultMyPostImg from "../../assets/DefaultMyPostImg.svg";

const UserRecentPosts = ({ postType, recentPostData }) => {
  let dataName = "";
  let korName = "";
  const setNames = () => {
    switch (postType) {
      case "market":
        dataName = "produce";
        korName = "판매";
        break;
      case "recipe":
        dataName = "recipe";
        korName = "레시피";
        break;
      case "share":
        dataName = "giveaway";
        korName = "나눔";
        break;
    }
  };
  setNames();

  return (
    <RecentPostDetailWrapper>
      <Title>최근 내가 작성한 {korName}글</Title>
      {recentPostData.length === 0 ? (
        <DefaultContent>
          <DefaultImg src={DefaultMyPostImg} />
          <DefaultTxt>앗! 아직 작성한 글이 없어요.</DefaultTxt>
        </DefaultContent>
      ) : (
        <ItemWrapper postType={postType}>
          {recentPostData.map((el) => (
            <UserRecentPostCard
              key={el[`${dataName}Idx`]}
              post={el}
              postType={postType}
              dataName={dataName}
            />
          ))}
        </ItemWrapper>
      )}
    </RecentPostDetailWrapper>
  );
};

export default UserRecentPosts;

const RecentPostDetailWrapper = styled.div`
  padding-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.postType === "recipe" ? "repeat(3,133px)" : "repeat(4, 133px)"};
  gap: 20px;
`;

const DefaultContent = styled.div`
  background-color: rgba(141, 230, 180, 0.15);
  width: 596px;
  height: 137px;
  display: grid;
  grid-template-columns: 160px 300px;
  align-items: center;
  justify-content: center;
`;

const DefaultImg = styled.img`
  width: auto;
  height: inherit;
`;

const DefaultTxt = styled.h2`
  font-weight: 500;
  font-size: 22px;
  color: #8e8e8e;
`;
