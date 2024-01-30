import MarketBannerImg from "../../assets/MarketBannerImg.png";
import BannerTemplate from "../../components/BannerTemplate";

function MarketBanner() {
  return (
    <BannerTemplate
      color="#feb37a"
      txt="싱싱함을 고르는 시간"
      strongTxt="우리 지역 농산물 장터"
      img={MarketBannerImg}
    />
  );
}

export default MarketBanner;
