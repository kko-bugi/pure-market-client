import styled from "styled-components";
import Template from "../../components/Template";
import UserHeader from "./UserHeader";
import UserRecentPost from "./UserRecentPost";

const MyPage = () => {
  return (
    <Template>
      <UserHeader />
      <UserRecentPost />
    </Template>
  );
};

export default MyPage;
