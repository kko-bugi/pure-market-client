import styled from "styled-components";
import Logo from "../assets/Logo.svg";

function NavBar() {
  return (
    <Wrapper>
      <a href="/">
        <img src={Logo} alt="" />
      </a>

      <MainFeature href="/market">농산물 쇼핑</MainFeature>
      <MainFeature href="">나눔 장터</MainFeature>
      <MainFeature href="">레시피 Book</MainFeature>

      <div>
        <SubFeature href="signUp">회원가입</SubFeature>
        <VerticalBar>|</VerticalBar>
        <SubFeature href="/login">로그인</SubFeature>
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

const MainFeature = styled.a`
  color: #333;
  font-weight: 700;
  font-size: 18px;
`;

const SubFeature = styled.a`
  color: #333;
  font-weight: 400;
  font-size: 12px;
  line-height: 283.3%;
`;

const VerticalBar = styled.span`
  color: #333;
  font-weight: 400;
  font-size: 12px;
  line-height: 283.3%;
  margin: 0 6px;
`;
