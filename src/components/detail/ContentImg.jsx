import styled from "styled-components";

function ContentImg({ src, alt, isSoldOut }) {
  return (
    <StyledImgContainer>
      <StyledImg src={src} alt={alt} isSoldOut={isSoldOut} />
      {isSoldOut === true && <SoldOutLabel>거래완료</SoldOutLabel>}
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
`;

const SoldOutLabel = styled.div`
  font-size: 24px;
  font-weight: 600;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
  border-radius: 15px;
`;
