import styled from "styled-components";

import Header from "./Header";

import { useState } from "react";
import Profile from "./Profile";
import DuplicateCheckButton from "./DuplicateCheckButton";
import Input from "./Input";
import SignUpButton from "./SignUpButton";

export default function SignUp() {
  // 넘길 값
  const [form, setForm] = useState({
    profile: "", //유효성 검사 체크 필요없이 바로 이 값 넘기기
    nickname: "",
    id: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
  });
  // 유효성 검사
  const [valid, setValid] = useState({
    //profileValid: false,
    nickname: false,
    id: false,
    password: false,
    passwordConfirm: false,
    phoneNumber: false,
  });

  const handleChange = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newForm);
    console.log(form);
  };

  const handleValidation = (key, isValid) => {
    setValid((prevValid) => ({ ...prevValid, [key]: isValid }));
    console.log(valid);
  };

  // 닉네임
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState("");
  const [nicknameButtonDisabled, setNicknameButtonDisabled] = useState(false);
  // 아이디
  const [idErrorMessage, setIdErrorMessage] = useState("");
  const [idButtonDisabled, setIdButtonDisabled] = useState(false);
  // 핸드폰 번호
  const [phoneNumber, setPhoneNumber] = useState(""); // 실제 넘길 값
  const [phoneNumberErrorMsg, setPhoneNumberErrorMsg] = useState("");
  // 비밀번호
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState(""); //실제 넘길 값
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  // 가입 완료하기
  const [signUpButtonDisabled, setSignUpButtonDisabled] = useState(true);

  // 닉네임
  const handleNicknameChange = (e) => {
    setNicknameErrorMessage(""); // 새로 내용 입력하면 초기화
    handleValidation("nickname", false); // 새로 내용 입력하면 다시 중복체크 하도록

    const userInput = e.target.value;
    if (userInput.includes(" ")) {
      setNicknameErrorMessage("닉네임에 공백을 포함할 수 없습니다.");
      handleValidation("nickname", false);
      setNicknameButtonDisabled(true); // 공백이 있으면 버튼 비활성화
    } else {
      setNicknameErrorMessage("");
      setNicknameButtonDisabled(false); // 공백이 없으면 버튼 활성화
    }
  };

  const handleNicknameCheck = (e) => {
    e.preventDefault();

    // 공백 입력 처리
    if (!form.nickname) {
      setNicknameErrorMessage("닉네임을 입력해주세요.");
      handleValidation("nickname", false);
      return;
    }

    const isNicknameAvailable = true; // 백엔드에서 받아온 데이터. 중복 여부 결과
    if (isNicknameAvailable) {
      setNicknameErrorMessage(""); // 에러 메시지 초기화
      handleValidation("nickname", true); // PassMsg를 표시하기 위해 상태 업데이트
    } else {
      setNicknameErrorMessage("이미 사용 중인 닉네임입니다.");
      handleValidation("nickname", false);
    }
  };

  // 아이디
  const handleIdChange = (e) => {
    setIdErrorMessage(""); // 새로 내용 입력하면 초기화
    handleValidation("id", false); // 새로 내용 입력하면 다시 중복체크 하도록

    const userInput = e.target.value;
    if (/[^a-zA-Z0-9]/.test(userInput) || userInput.includes(" ")) {
      setIdErrorMessage(
        "영어와 숫자만 입력 가능하며, 공백을 포함할 수 없습니다."
      );
      setIdButtonDisabled(true);
      handleValidation("id", false);
    } else {
      setIdErrorMessage("");
      setIdButtonDisabled(false);
    }
  };

  const handleIdCheck = (e) => {
    e.preventDefault();

    // 공백 입력 처리
    if (!form.id) {
      setIdErrorMessage("아이디를 입력해주세요.");
      handleValidation("id", false);
      return;
    }

    const isIdAvailable = true; // 백엔드에서 받아온 데이터. 중복 여부 결과
    if (isIdAvailable) {
      setIdErrorMessage("");
      handleValidation("id", true);
    } else {
      setIdErrorMessage("이미 사용 중인 아이디입니다.");
      handleValidation("id", false);
    }
  };

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
              name: "nickname",
              onChange: (e) => {
                handleChange(e);
                handleNicknameChange(e);
              },
            }}
            duplicate={
              <DuplicateCheckButton
                onClick={handleNicknameCheck}
                disabled={nicknameButtonDisabled}
              ></DuplicateCheckButton>
            }
            errorMsg={nicknameErrorMessage}
            passMsg={valid.nickname && "사용 가능한 닉네임입니다."}
          ></Input>

          <Input
            title="아이디"
            text={{
              type: "text",
              placeholder: "아이디를 입력해주세요",
              name: "id",
              onChange: (e) => {
                handleChange(e);
                handleIdChange(e);
              },
            }}
            duplicate={
              <DuplicateCheckButton
                onClick={handleIdCheck}
                disabled={idButtonDisabled}
              ></DuplicateCheckButton>
            }
            errorMsg={idErrorMessage}
            passMsg={valid.id && "사용 가능한 아이디입니다."}
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
            title="핸드폰 번호"
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
