import HomeBannerImg from "../assets/HomeBannerImg.png";
import BannerTemplate from "../components/BannerTemplate";

function HomeBanner() {
  return (
    <BannerTemplate
      color="#8de6b4"
      txt="싱싱함을 고르는 시간"
      strongTxt="우리 지역 농산물 장터"
      img={HomeBannerImg}
    />
  );
}

export default HomeBanner;
