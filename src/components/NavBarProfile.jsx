import styled from "styled-components";
import data from "../data/user.json";

function NavBarProfile() {
  return (
    <ProfileWrapper>
      <Nickname>{data.nickname}</Nickname>
      <ProfileImg src={data.img} alt="" />
    </ProfileWrapper>
  );
}

export default NavBarProfile;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ProfileImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`;

const Nickname = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #8e8e8e;
  font-weight: 400;
`;
