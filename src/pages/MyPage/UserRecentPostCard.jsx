import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const UserRecentPostCard = ({ post, postType, dataName, status }) => {
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
      <ThumbnailWrapper>
        <PostImg src={post[`${dataName}Image`]} />
        {status === "판매완료" && <SoldOutLabel>판매완료</SoldOutLabel>}
        {status === "나눔완료" && <SoldOutLabel>나눔완료</SoldOutLabel>}
      </ThumbnailWrapper>
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

const ThumbnailWrapper = styled.div`
  position: relative;
`;

const PostImg = styled.img`
  width: 133px;
  height: 119px;
  border-radius: 15px;
  padding-bottom: 3px;
`;

const SoldOutLabel = styled.div`
  font-size: 18px;
  font-weight: 600;
  top: 0;
  width: 133px;
  height: 119px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
  border-radius: 15px;
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
