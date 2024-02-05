import styled from "styled-components";

const UserRecentPostDetail = ({ postType }) => {
  return (
    <RecentPostDetailWrapper>
      <Title>최근 내가 작성한 {postType}글</Title>
    </RecentPostDetailWrapper>
  );
};

export default UserRecentPostDetail;

const RecentPostDetailWrapper = styled.div``;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;
