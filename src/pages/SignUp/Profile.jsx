import styled from "styled-components";

import { useState } from "react";

import CameraIcon from "../../assets/CameraIcon.svg";

export default function Profile({ form, setForm }) {
  const [profileImage, setProfileImage] = useState(null); // 실제 넘길 값

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("이미지 크기는 5MB를 초과할 수 없습니다.");
      } else {
        const allowedExtensions = ["jpg", "jpeg", "png"];
        const fileExtension = file.name.split(".").pop().toLowerCase();

        if (allowedExtensions.includes(fileExtension)) {
          setProfileImage(file);
          setForm((prevForm) => ({
            ...prevForm,
            profile: file, // profile key에 이미지 파일 저장
          }));
        } else {
          alert(
            "지원되지 않는 형식입니다. jpg, jpeg, png 이미지 형식을 사용해주세요."
          );
        }
      }
    }
  };

  return (
    <Wrapper>
      <Circle
        htmlFor="profileImageInput"
        imageUrl={profileImage && URL.createObjectURL(profileImage)}
      >
        <img src={CameraIcon} alt="Camera Icon" />
        <input
          type="file"
          id="profileImageInput"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
        />
      </Circle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Circle = styled.label`
  width: 104px;
  height: 104px;
  background-color: #d9d9d9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  input {
    display: none;
  }
  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
`;
