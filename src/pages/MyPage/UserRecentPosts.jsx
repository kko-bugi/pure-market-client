import styled from "styled-components";
import UserRecentPostCard from "./UserRecentPostCard";

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
      <ItemWrapper postType={postType}>
        {recentPostData.map((el) => {
          return (
            <UserRecentPostCard
              key={el[`${dataName}Idx`]}
              post={el}
              postType={postType}
              dataName={dataName}
            />
          );
        })}
      </ItemWrapper>
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
