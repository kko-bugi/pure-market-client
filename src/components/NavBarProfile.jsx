import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DefaultImg from "../assets/DefaultProfileImg.png";
import instance from "../axios_interceptor";

function NavBarProfile({ profileImg, nickname, contact }) {
  const [img, setImg] = useState(profileImg);
  const [name, setName] = useState(nickname);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await instance.get("/users/profile");
        console.log(res);
        setImg(res.data.isSuccess ? res.data.result.profileImage : DefaultImg);
        setName(res.data.isSuccess ? res.data.result.nickname : "이름없음");
      } catch (e) {
        console.log(e);
      }
    };
    if (contact === undefined) getUserProfile();
  }, []);

  return (
    <ProfileLink to="/mypage">
      <ProfileWrapper>
        <Nickname>{name}</Nickname>
        <ProfileImg src={img} alt="" />
      </ProfileWrapper>
    </ProfileLink>
  );
}

export default NavBarProfile;

const ProfileLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;


const ProfileWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center; 
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
