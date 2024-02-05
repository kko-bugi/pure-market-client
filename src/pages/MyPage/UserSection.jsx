import styled from "styled-components";
import UserRecentPosts from "./UserRecentPosts";

const UserSection = ({ data }) => {
  return (
    <RecentPostWrapper>
      <UserRecentPosts
        name="market"
        postType="판매"
        recentPostData={data.produceList}
      />
      <UserRecentPosts
        name="recipe"
        postType="레시피"
        recentPostData={data.recipeList}
      />
      <UserRecentPosts
        name="share"
        postType="나눔"
        recentPostData={data.giveawayList}
      />
    </RecentPostWrapper>
  );
};

export default UserSection;

const RecentPostWrapper = styled.section`
  width: 580px;
  padding-top: 45px;
`;
