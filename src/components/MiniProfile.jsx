import styled from "styled-components";
import DefaultImg from "../assets/DefaultProfileImg.png";

function MiniProfile({
  profileImg = DefaultImg,
  nickname = "이름없음",
  contact = "010-XXXX-XXX",
}) {
  return (
    <ProfileWrapper>
      <ProfileImg src={profileImg} alt="" />
      <TextWrapper>
        <Nickname>{nickname}</Nickname>
        <PhoneNumber>{contact}</PhoneNumber>
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
