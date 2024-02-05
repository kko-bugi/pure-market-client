import styled from "styled-components";

const UserHeader = () => {
  //임시 데이터
  const userData = {
    name: "미야옹",
    img: "https://i.pinimg.com/474x/ea/bd/28/eabd28ad0a00cb6dbe478b1fb69aa9a8.jpg",
  };
  return (
    <HeaderWrapper>
      <ProfileImg src={userData.img}></ProfileImg>
      <GreetingWrapper>
        <GreetingHello>안녕하세요</GreetingHello>
        <GreetingUserName>{userData.name} 님!</GreetingUserName>
      </GreetingWrapper>
      <LogOutBtn>로그아웃</LogOutBtn>
    </HeaderWrapper>
  );
};

export default UserHeader;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 1fr 1.5fr;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImg = styled.img`
  width: 126px;
  height: 126px;
  border-radius: 50%;
`;

const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
