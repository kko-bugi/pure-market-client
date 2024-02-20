import styled from "styled-components";

function BannerTemplate({ txt, strongTxt, img, color, imgAlign = "right" }) {
  return (
    <BannerWrapper bgColor={color}>
      <BannerContentWrapper>
        {imgAlign === "left" && <BannerImg src={img} alt="" />}
        <BannerTextWrapper>
          <BannerText>{txt}</BannerText>
          <BannerTextStrong>{strongTxt}</BannerTextStrong>
        </BannerTextWrapper>
        {imgAlign === "right" && <BannerImg src={img} alt="" />}
      </BannerContentWrapper>
    </BannerWrapper>
  );
}

export default BannerTemplate;

const BannerWrapper = styled.div`
  background-color: ${(props) => props.bgColor};
  height: 252px;
  width: 100%;
`;
const BannerContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const BannerImg = styled.img`
  height: 100%;
`;
const BannerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const BannerText = styled.span`
  color: #000;
  font-size: 34px;
`;
const BannerTextStrong = styled(BannerText)`
  font-weight: 700;
`;
