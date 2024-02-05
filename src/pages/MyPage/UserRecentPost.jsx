import styled from "styled-components";
import UserRecentPostDetail from "./UserRecentPostDetail";

const UserRecentPost = () => {
  return (
    <RecentPostWrapper>
      <UserRecentPostDetail postType="판매" />
      <UserRecentPostDetail postType="레시피" />
      <UserRecentPostDetail postType="나눔" />
    </RecentPostWrapper>
  );
};

export default UserRecentPost;

const RecentPostWrapper = styled.section`
  width: 580px;
  padding-top: 45px;
`;
