import HomeBannerImg from "../assets/HomeBannerImg.png";
import HomeBannerTemplate from "../components/HomeBannerTemplate";

function HomeBanner() {
  return (
    <HomeBannerTemplate
      color="#8de6b4"
      txt="싱싱함을 고르는 시간"
      strongTxt="우리 지역 농산물 직거래 장터"
      img={HomeBannerImg}
      imgAlign="left"
    />
  );
}

export default HomeBanner;
