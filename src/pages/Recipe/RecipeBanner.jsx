import RecipeBannerImg from "../../assets/RecipeBannerImg.png";
import BannerTemplate from "../../components/BannerTemplate";

function RecipeBanner() {
  return (
    <BannerTemplate
      color="#ffe9c8"
      txt="우리 집을 맛집으로"
      strongTxt="레시피 추천 Book"
      img={RecipeBannerImg}
    />
  );
}

export default RecipeBanner;
