import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const UserRecentPostCard = ({ post, postType, dataName }) => {
  const navigate = useNavigate();
  const index = post[dataName + "Idx"];
  return (
    <PostWrapper
      onClick={() => {
        navigate(`/${postType}/${index}`, {
          state: index,
        });
      }}
    >
      <PostImg src={post[`${dataName}Image`]} />
      <PostName>{post.title}</PostName>
      <PostDate>{post.createdDate}</PostDate>
    </PostWrapper>
  );
};

export default UserRecentPostCard;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const PostImg = styled.img`
  width: 133px;
  height: 119px;
  border-radius: 15px;
  padding-bottom: 3px;
`;

const PostName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
`;

const PostDate = styled.span`
  text-align: right;
  font-size: 8px;

  color: #8e8e8e;
`;
