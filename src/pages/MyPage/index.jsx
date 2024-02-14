import Template from "../../components/Template";
import UserHeader from "./UserHeader";
import UserSection from "./UserSection";
import data from "../../data/myPage.json";

const MyPage = () => {
  return (
    <Template>
      <UserHeader data={data.result} />
      <UserSection data={data.result} />
    </Template>
  );
};

export default MyPage;
