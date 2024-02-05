import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const UserRecentPostCard = ({ post, name }) => {
  const navigate = useNavigate();
  return (
    <PostWrapper
      onClick={() => {
        navigate(`/${name}/${post.name}`);
      }}
    >
      <PostImg src={post.img} />
      <PostName>{post.name}</PostName>
    </PostWrapper>
  );
};

export default UserRecentPostCard;

const PostWrapper = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const PostImg = styled.img`
  width: 133px;
  height: 119px;
  border-radius: 15px;
`;

const PostName = styled.span``;
