import ShareBannerImg from "../../assets/ShareBannerImg.png";
import BannerTemplate from "../../components/BannerTemplate";

const ShareBanner = () => {
  return (
    <BannerTemplate
      color="#83C1FC"
      txt="맛있는 건 나눠 먹자!"
      strongTxt="우리 지역 나눔 장터"
      img={ShareBannerImg}
    />
  );
};

export default ShareBanner;
