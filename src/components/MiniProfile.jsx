import { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultImg from "../assets/DefaultProfileImg.png";
import instance from "../axios_interceptor";

function MiniProfile({ profileImg, nickname, contact }) {
  const [img, setImg] = useState(profileImg);
  const [name, setName] = useState(nickname);
  const [phone, setPhone] = useState(contact);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await instance.get("/users/profile");
        console.log(res);
        setImg(res.data.isSuccess ? res.data.result.profileImage : DefaultImg);
        setName(res.data.isSuccess ? res.data.result.nickname : "이름없음");
        setPhone(
          res.data.isSuccess ? res.data.result.contact : "010-XXXX-XXXX"
        );
      } catch (e) {
        console.log(e);
      }
    };
    if (contact === undefined) getUserProfile();
  }, []);

  return (
    <ProfileWrapper>
      <ProfileImg src={img} alt="" />
      <TextWrapper>
        <Nickname>{name}</Nickname>
        <PhoneNumber>{phone}</PhoneNumber>
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
