import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../data/user.json";

function NavBarProfile() {
  return (
    <ProfileLink to="/mypage">
      <ProfileWrapper>
        <Nickname>{data.nickname}</Nickname>
        <ProfileImg src={data.img} alt="" />
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
