import styled from "styled-components";

import Header from "./Header";

import { useState, useEffect } from "react";
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
    //passwordConfirm: false,
    phoneNumber: false,
  });
  // 에러 메세지
  const [errorMsg, setErrorMsg] = useState({
    nickname: "",
    id: "",
    password: "",
    phoneNumber: "",
  });
  // 닉네임
  const [nicknameButtonDisabled, setNicknameButtonDisabled] = useState(false);
  // 아이디
  const [idButtonDisabled, setIdButtonDisabled] = useState(false);
  // 가입 완료하기
  const [signUpButtonDisabled, setSignUpButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newForm);

    const name =
      e.target.name === "passwordConfirm" ? "password" : e.target.name;
    //에러메세지 초기화
    handleErrorMsg(name, "");
    //validation 초기화
    handleValidation(name, false); // 새로 내용 입력하면 다시 중복체크 하도록
  };

  const handleValidation = (key, isValid) => {
    setValid((prevValid) => ({ ...prevValid, [key]: isValid }));
    console.log(valid);
  };

  const handleErrorMsg = (key, value) => {
    setErrorMsg((prevError) => ({ ...prevError, [key]: value }));
  };

  // 닉네임
  const handleNicknameChange = (e) => {
    const userInput = e.target.value;
    if (userInput.includes(" ")) {
      handleErrorMsg("nickname", "닉네임에 공백을 포함할 수 없습니다.");
      handleValidation("nickname", false);
      setNicknameButtonDisabled(true); // 공백이 있으면 버튼 비활성화
    } else {
      handleErrorMsg("nickname", "");
      setNicknameButtonDisabled(false); // 공백이 없으면 버튼 활성화
    }
  };

  const handleNicknameCheck = (e) => {
    e.preventDefault();

    // 공백 입력 처리
    if (!form.nickname) {
      handleErrorMsg("nickname", "닉네임을 입력해주세요.");
      handleValidation("nickname", false);
      return;
    }

    const isNicknameAvailable = true; // 백엔드에서 받아온 데이터. 중복 여부 결과
    if (isNicknameAvailable) {
      handleErrorMsg("nickname", ""); // 에러 메시지 초기화
      handleValidation("nickname", true); // PassMsg를 표시하기 위해 상태 업데이트
    } else {
      handleErrorMsg("nickname", "이미 사용 중인 닉네임입니다.");
      handleValidation("nickname", false);
    }
  };

  // 아이디
  const handleIdChange = (e) => {
    const userInput = e.target.value;
    if (/[^a-zA-Z0-9]/.test(userInput) || userInput.includes(" ")) {
      handleErrorMsg(
        "id",
        "영어와 숫자만 입력 가능하며, 공백을 포함할 수 없습니다."
      );
      setIdButtonDisabled(true);
      handleValidation("id", false);
    } else {
      handleErrorMsg("id", "");
      setIdButtonDisabled(false);
    }
  };

  const handleIdCheck = (e) => {
    e.preventDefault();

    // 공백 입력 처리
    if (!form.id) {
      handleErrorMsg("id", "아이디를 입력해주세요.");
      handleValidation("id", false);
      return;
    }

    const isIdAvailable = false; // 백엔드에서 받아온 데이터. 중복 여부 결과
    if (isIdAvailable) {
      handleErrorMsg("id", "");
      handleValidation("id", true);
    } else {
      handleErrorMsg("id", "이미 사용 중인 아이디입니다.");
      handleValidation("id", false);
    }
  };

  // 비밀번호
  useEffect(() => {
    if (form.passwordConfirm) {
      if (form.password === form.passwordConfirm) {
        handleValidation("password", true);
      } else {
        handleErrorMsg("password", "비밀번호가 일치하지 않습니다.");
      }
    }
  }, [form.password, form.passwordConfirm]);

  // 핸드폰 번호
  const handlePhoneNumberChange = (e) => {
    if (/[^0-9]/.test(e.target.value)) {
      handleErrorMsg("phoneNumber", "숫자만 입력해주세요.");
    } else {
      handleErrorMsg("phoneNumber", "");
      handleValidation("phoneNumber", true);
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
            errorMsg={errorMsg.nickname}
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
            errorMsg={errorMsg.id}
            passMsg={valid.id && "사용 가능한 아이디입니다."}
          ></Input>

          <Input
            title="비밀번호"
            text={{
              type: "password",
              placeholder: "비밀번호를 입력해주세요",
              value: form.password,
              name: "password",
              onChange: (e) => {
                handleChange(e);
              },
            }}
          ></Input>

          <Input
            title="비밀번호 확인"
            text={{
              type: "password",
              placeholder: "비밀번호를 한번 더 입력해주세요",
              value: form.passwordConfirm,
              name: "passwordConfirm",
              onChange: (e) => {
                handleChange(e);
              },
            }}
            errorMsg={errorMsg.password}
          ></Input>

          <Input
            title="핸드폰 번호"
            text={{
              type: "text",
              placeholder: "‘-’ 없이 숫자만",
              name: "phoneNumber",
              onChange: (e) => {
                handleChange(e);
                handlePhoneNumberChange(e);
              },
            }}
            errorMsg={errorMsg.phoneNumber}
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
