import styled from "styled-components";
import data from "../data/user.json";

function MiniProfile() {
  return (
    <ProfileWrapper>
      <ProfileImg src={data.img} alt="" />
      <TextWrapper>
        <Nickname>{data.nickname}</Nickname>
        <PhoneNumber>{data.phone}</PhoneNumber>
      </TextWrapper>
    </ProfileWrapper>
  );
}

export default MiniProfile;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ProfileImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
const TextWrapper = styled.div`
  // width: 100%;
`;
const Nickname = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
const PhoneNumber = styled.div`
  font-size: 12px;
`;
