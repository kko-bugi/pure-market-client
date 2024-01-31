import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Wrapper>
      <a href="/">
        <img src={Logo} alt="" />
      </a>

      <MainFeature to="/market">농산물 쇼핑</MainFeature>
      <MainFeature to="">나눔 장터</MainFeature>
      <MainFeature to="">레시피 Book</MainFeature>

      <div>
        <SubFeature to="">회원가입</SubFeature>
        <VerticalBar>|</VerticalBar>
        <SubFeature to="/login">로그인</SubFeature>
      </div>
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 781px;
`;

const MainFeature = styled(Link)`
  color: #333;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  &::hover {
    color: #828282;
  }
`;

const SubFeature = styled(Link)`
  color: #333;
  font-weight: 400;
  font-size: 12px;
  line-height: 283.3%;
  text-decoration: none;
`;

const VerticalBar = styled.span`
  color: #333;
  font-weight: 400;
  font-size: 12px;
  line-height: 283.3%;
  margin: 0 6px;
`;
