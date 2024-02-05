import styled from "styled-components";

function HomeShareCard({ share }) {
  return (
    <CardWrapper href="">
      <ShareItemImg src={share.img} alt="" />
      <ShareItemName>{share.name}</ShareItemName>
      <ShareItemContents>
        {share.contents.toLocaleString()}
      </ShareItemContents>
    </CardWrapper>
  );
}


export default HomeShareCard;

const CardWrapper = styled.a`
  max-width: 180px;
  display: inline-block;
  margin-bottom: 40px;
  margin-left: 5px;
  margin-right: 5px;
  vertical-align: top;
`;

const ShareItemImg = styled.img`
  width: 180px;
  height: 155px;
  border-radius: 15px;
`;

const ShareItemName = styled.div`
  color: #000;
  font-size: 12px;
  min-height: 39px;
`;

const ShareItemContents = styled.div`
  color: #8e8e8e;
  font-size: 10px;
  font-weight: 400;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis; /*말줄임표가안나온다?*/
  min-width: 0;
`;
