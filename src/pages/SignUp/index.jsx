import styled from "styled-components";

import Header from "./Header";

import { useState } from "react";
import Profile from "./Profile";
import DuplicateCheckButton from "./DuplicateCheckButton";
import Input from "./Input";
import SignUpButton from "./SignUpButton";

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
  // 가입 완료하기
  const [signUpButtonDisabled, setSignUpButtonDisabled] = useState(true);

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
      setIsIdChecked(false);
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
      <SignUpContainer>
        <Header />
        <Form>
          <Profile />
          <Input
            title="닉네임"
            text={{
              type: "text",
              placeholder: "닉네임을 입력해주세요",
              onChange: handleNicknameChange,
            }}
            duplicate={
              <DuplicateCheckButton
                onClick={handleNicknameCheck}
                disabled={nicknameButtonDisabled}
              ></DuplicateCheckButton>
            }
            errorMsg={nicknameErrorMessage}
            passMsg={isNicknameChecked && "사용 가능한 닉네임입니다."}
          ></Input>

          <Input
            title="아이디"
            text={{
              type: "text",
              placeholder: "아이디를 입력해주세요",
              onChange: handleIdChange,
            }}
            duplicate={
              <DuplicateCheckButton
                onClick={handleIdCheck}
                disabled={idButtonDisabled}
              ></DuplicateCheckButton>
            }
            errorMsg={idErrorMessage}
            passMsg={isIdChecked && "사용 가능한 아이디입니다."}
          ></Input>

          <Input
            title="비밀번호"
            text={{
              type: "password",
              placeholder: "비밀번호를 입력해주세요",
              onChange: handlePasswordChange,
            }}
          ></Input>

          <Input
            title="비밀번호 확인"
            text={{
              type: "password",
              placeholder: "비밀번호를 한번 더 입력해주세요",
              onChange: handlePasswordConfirmChange,
            }}
            errorMsg={passwordErrorMsg}
          ></Input>

          <Input
            title="비밀번호 확인"
            text={{
              type: "text",
              placeholder: "‘-’ 없이 숫자만",
              onChange: handlePhoneNumberChange,
            }}
            errorMsg={phoneNumberErrorMsg}
          ></Input>

          <SignUpButton disabled={signUpButtonDisabled} />
        </Form>
      </SignUpContainer>
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

const SignUpContainer = styled.div`
  width: 400px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
