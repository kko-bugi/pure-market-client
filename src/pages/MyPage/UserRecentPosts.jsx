import styled from "styled-components";
import UserRecentPostCard from "./UserRecentPostCard";

const UserRecentPosts = ({ name, postType, recentPostData }) => {
  console.log(name);
  return (
    <RecentPostDetailWrapper>
      <Title>최근 내가 작성한 {postType}글</Title>
      <ItemWrapper name={name}>
        {recentPostData.map((el) => (
          <UserRecentPostCard key="name" post={el} name={name} />
        ))}
      </ItemWrapper>
    </RecentPostDetailWrapper>
  );
};

export default UserRecentPosts;

const RecentPostDetailWrapper = styled.div``;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.name === "recipe" ? "repeat(3,133px)" : "repeat(4, 133px)"};

  gap: 20px;
`;
