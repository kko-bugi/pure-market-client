import styled from "styled-components";
import UserRecentPosts from "./UserRecentPosts";

const UserSection = ({ data }) => {
  return (
    <RecentPostWrapper>
      <UserRecentPosts postType="market" recentPostData={data.produceList} />
      <UserRecentPosts postType="recipe" recentPostData={data.recipeList} />
      <UserRecentPosts postType="share" recentPostData={data.giveawayList} />
    </RecentPostWrapper>
  );
};

export default UserSection;

const RecentPostWrapper = styled.section`
  width: 580px;
  padding-top: 45px;
`;
