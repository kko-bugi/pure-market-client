import styled from "styled-components";

function ContentImg({ src, alt, isSoldOut }) {
  return (
    <StyledImgContainer>
      <StyledImg src={src} alt={alt} isSoldOut={isSoldOut} />
      {isSoldOut && <SoldOutLabel>거래 완료</SoldOutLabel>}
    </StyledImgContainer>
  );
}

export default ContentImg;

const StyledImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 416px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 416px;
  object-fit: cover;
  ${(props) => props.isSoldOut && `filter: grayscale(40%); opacity:0.5`}
`;

const SoldOutLabel = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(169, 169, 169);
  padding: 15px 0;
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
