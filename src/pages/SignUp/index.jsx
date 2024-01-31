import styled from "styled-components";

import CloseIcon from "../../assets/CloseBtnImg.png";
import CameraIcon from "../../assets/CameraIcon.svg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  // 핸드폰 번호
  const [phoneNumber, setPhoneNumber] = useState(""); // 실제 넘길 값
  const [phoneNumberErrorMsg, setPhoneNumberErrorMsg] = useState("");
  // 비밀번호
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState(""); //실제 넘길 값
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  // 프로필 사진
  const [profileImage, setProfileImage] = useState(null); // 실제 넘길 값
  // 닉네임
  const [nickname, setNickname] = useState("");
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState("");
  const [nicknameButtonDisabled, setNicknameButtonDisabled] = useState(false);
  // 아이디
  const [id, setId] = useState("");
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [idErrorMessage, setIdErrorMessage] = useState("");
  const [idButtonDisabled, setIdButtonDisabled] = useState(false);

  // X버튼을 위한 navigate
  const navigate = useNavigate();

  // 핸드폰 번호
  const handlePhoneNumberChange = (e) => {
    if (/[^0-9]/.test(e.target.value)) {
      setPhoneNumberErrorMsg("숫자만 입력해주세요.");
    } else {
      setPhoneNumberErrorMsg("");
      setPhoneNumber(e.target.value); // 실제 넘길 값
    }
  };

  // 비밀번호
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 비밀번호 확인
  const handlePasswordConfirmChange = (e) => {
    if (e.target.value !== password) {
      setPasswordErrorMsg("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordErrorMsg("");
      setPasswordConfirm(e.target.value); // 실제 넘길 값
    }
  };

  // 프로필
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
        } else {
          alert(
            "지원되지 않는 형식입니다. jpg, jpeg, png 이미지 형식을 사용해주세요."
          );
        }
      }
    }
  };

  // 닉네임
  const handleNicknameChange = (e) => {
    setNicknameErrorMessage(""); // 새로 내용 입력하면 초기화
    setIsNicknameChecked(false); // 새로 내용 입력하면 다시 중복체크 하도록

    const userInput = e.target.value;
    // 닉네임 공백 체크
    if (userInput.includes(" ")) {
      setNicknameErrorMessage("닉네임에 공백을 포함할 수 없습니다.");
      setIsNicknameChecked(false);
      setNicknameButtonDisabled(true); // 공백이 있으면 버튼 비활성화
    } else {
      setNickname(userInput);
      setNicknameErrorMessage("");
      setNicknameButtonDisabled(false); // 공백이 없으면 버튼 활성화
    }
  };

  const handleNicknameCheck = (e) => {
    e.preventDefault();

    // 공백 입력 처리
    if (!nickname) {
      setNicknameErrorMessage("닉네임을 입력해주세요.");
      setIsNicknameChecked(false);
      return;
    }

    const isNicknameAvailable = true; // 백엔드에서 받아온 데이터. 중복 여부 결과
    if (isNicknameAvailable) {
      setNicknameErrorMessage(""); // 에러 메시지 초기화
      setIsNicknameChecked(true); // PassMsg를 표시하기 위해 상태 업데이트
    } else {
      setNicknameErrorMessage("이미 사용 중인 닉네임입니다.");
      setIsNicknameChecked(false);
    }
    setIsNicknameChecked(isNicknameAvailable);
  };

  // 아이디
  const handleIdChange = (e) => {
    setIdErrorMessage(""); // 새로 내용 입력하면 초기화
    setIsIdChecked(false); // 새로 내용 입력하면 다시 중복체크 하도록

    const userInput = e.target.value;

    if (/[^a-zA-Z0-9]/.test(userInput) || userInput.includes(" ")) {
      setIdErrorMessage(
        "영어와 숫자만 입력 가능하며, 공백을 포함할 수 없습니다."
      );
      setIdButtonDisabled(true);
      setIsNicknameChecked(false);
    } else {
      setId(userInput);
      setIdErrorMessage("");
      setIdButtonDisabled(false);
    }
  };

  const handleIdCheck = (e) => {
    e.preventDefault();

    // 공백 입력 처리
    if (!id) {
      setIdErrorMessage("아이디를 입력해주세요.");
      setIsIdChecked(false);
      return;
    }

    const isIdAvailable = true; // 백엔드에서 받아온 데이터. 중복 여부 결과
    if (isIdAvailable) {
      setIdErrorMessage("");
      setIsIdChecked(true);
    } else {
      setIdErrorMessage("이미 사용 중인 아이디입니다.");
      setIsIdChecked(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>회원가입</Title>
          <CloseBtn onClick={() => navigate(-1)}>
            <img src={CloseIcon} />
          </CloseBtn>
        </Header>
        <ProfileWrapper>
          <Profile
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
          </Profile>
        </ProfileWrapper>
        <Form>
          <InputWrapper>
            <InputTitle>
              닉네임<span>*</span>
            </InputTitle>
            <InputBtnWrapper>
              <Input
                type="text"
                placeholder="닉네임을 입력해주세요"
                onChange={handleNicknameChange}
              />
              <DuplicateCheckButton
                onClick={handleNicknameCheck}
                disabled={nicknameButtonDisabled}
              >
                중복 확인
              </DuplicateCheckButton>
            </InputBtnWrapper>
            {nicknameErrorMessage && (
              <ErrorMsg>{nicknameErrorMessage}</ErrorMsg>
            )}
            {isNicknameChecked && <PassMsg>사용 가능한 닉네임입니다.</PassMsg>}
          </InputWrapper>
          <InputWrapper>
            <InputTitle>
              아이디<span>*</span>
            </InputTitle>
            <InputBtnWrapper>
              <Input
                type="text"
                placeholder="아이디를 입력해주세요"
                onChange={handleIdChange}
              />
              <DuplicateCheckButton
                onClick={handleIdCheck}
                disabled={idButtonDisabled}
              >
                중복 확인
              </DuplicateCheckButton>
            </InputBtnWrapper>
            {idErrorMessage && <ErrorMsg>{idErrorMessage}</ErrorMsg>}
            {isIdChecked && <PassMsg>사용 가능한 아이디입니다.</PassMsg>}
          </InputWrapper>
          <InputWrapper>
            <InputTitle>
              비밀번호<span>*</span>
            </InputTitle>
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePasswordChange}
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>
              비밀번호 확인<span>*</span>
            </InputTitle>
            <Input
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
              onChange={handlePasswordConfirmChange}
            />
            {passwordErrorMsg && <ErrorMsg>{passwordErrorMsg}</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <InputTitle>
              핸드폰 번호<span>*</span>
            </InputTitle>
            <Input
              type="text"
              placeholder="‘-’ 없이 숫자만"
              onChange={handlePhoneNumberChange}
            />
            {phoneNumberErrorMsg && <ErrorMsg>{phoneNumberErrorMsg}</ErrorMsg>}
          </InputWrapper>
          <BtnWrapper>
            <SignUpBtn>가입 완료하기</SignUpBtn>
          </BtnWrapper>
        </Form>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

const Container = styled.div`
  width: 400px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  flex: 1;
`;

const CloseBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

const ProfileWrapper = styled.div`
  //이거 안하면 프로필 원이 눌림
`;

const Profile = styled.label`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputTitle = styled.h3`
  font-size: 18px;
  span {
    color: #ff0000;
  }
  margin: 0;
`;

const InputBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #bababa;
  padding: 3px 0px;
  flex: 1;
  &::placeholder {
    color: #bababa;
  }
  &:focus {
    outline: none;
  }
  margin-top: 10px;
`;

const DuplicateCheckButton = styled.button`
  width: 78px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #0a5226;
  background-color: white;
  font-size: 14px;
  font-family: inherit;
  color: #4da36f;
  cursor: pointer;
  margin-left: 15px;
  margin-bottom: 6px;

  &:hover {
    background-color: #d9d9d9;
  }

  &:disabled {
    background-color: #bababa;
    color: #666666;
    cursor: default;
    border: 1px solid #999999;
  }
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: 13px;
`;

const PassMsg = styled.span`
  color: green;
  font-size: 13px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 40px 0;
`;

const SignUpBtn = styled.button`
  width: 360px;
  height: 60px;
  background-color: #d6e9dd;
  border-radius: 37.5px;
  font-size: 20px;
  color: #ffffff;
  border: transparent;
`;
