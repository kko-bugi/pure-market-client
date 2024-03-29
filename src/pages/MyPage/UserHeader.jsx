import styled from "styled-components";
import instance from "../../axios_interceptor";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const UserHeader = ({ data }) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    const data = {
      refreshToken: cookies.get("refreshToken"),
    };
    try {
      const res = await instance.patch("/users/logout", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      cookies.remove("refreshToken", { path: "/" });
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <HeaderWrapper>
      <ProfileImg src={data.profileImage}></ProfileImg>
      <GreetingWrapper>
        <GreetingHello>안녕하세요</GreetingHello>
        <GreetingUserName>
          {data.nickname.length > 4
            ? data.nickname.slice(0, 4) + "..."
            : data.nickname}{" "}
          님!
        </GreetingUserName>
      </GreetingWrapper>
      <LogOutBtn onClick={handleLogOut}>로그아웃</LogOutBtn>
    </HeaderWrapper>
  );
};

export default UserHeader;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 126px 250px 60px;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
`;

const ProfileImg = styled.img`
  width: 126px;
  height: 126px;
  border-radius: 50%;
`;

const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
`;

const GreetingHello = styled.span`
  font-size: 18px;
  line-height: 26.06px;
`;

const GreetingUserName = styled.span`
  font-size: 32px;
  line-height: 46.34px;
`;

const LogOutBtn = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
  text-align: right;
  margin-top: auto;
  font-size: 12px;
  color: #333333;
`;
