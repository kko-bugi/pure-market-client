import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Profile from "./Profile";
import DuplicateCheckButton from "./DuplicateCheckButton";
import Input from "./Input";
import SignUpButton from "./SignUpButton";
import DefaultProfileImg from "../../assets/DefaultProfileImg.png";
import instance from "../../axios_interceptor";

export default function SignUp() {
  // 넘길 값
  const [form, setForm] = useState({
    profile: "",
    nickname: "",
    loginId: "",
    password: "",
    passwordCheck: "",
    contact: "",
  });
  // 유효성 검사
  const [valid, setValid] = useState({
    nickname: false,
    loginId: false,
    password: false,
    contact: false,
  });
  // 에러 메세지
  const [errorMsg, setErrorMsg] = useState({
    nickname: "",
    loginId: "",
    password: "",
    passwordCheck: "",
    contact: "",
  });
  // 닉네임
  const [isNicknameBtnDisabled, setIsNicknameBtnDisabled] = useState(false);
  // 아이디
  const [isIdBtnDisabled, setIsIdBtnDisabled] = useState(false);
  // 가입 완료하기
  const [isSignUpBtnDisabled, setIsSignUpBtnDisabled] = useState(true);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newForm);

    const name = e.target.name === "passwordCheck" ? "password" : e.target.name;
    //에러메세지 초기화
    handleErrorMsg(name, "");
    //validation 초기화
    handleValidation(name, false); // 새로 내용 입력하면 다시 중복체크 하도록
  };

  const handleValidation = (key, isValid) => {
    setValid((prevValid) => ({ ...prevValid, [key]: isValid }));
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
      setIsNicknameBtnDisabled(true); // 공백이 있으면 버튼 비활성화
    } else {
      handleErrorMsg("nickname", "");
      setIsNicknameBtnDisabled(false); // 공백이 없으면 버튼 활성화
    }
  };

  const handleNicknameCheck = async (e) => {
    e.preventDefault();

    // 공백 입력 처리
    if (!form.nickname) {
      handleErrorMsg("nickname", "닉네임을 입력해주세요.");
      handleValidation("nickname", false);
      return;
    }

    // 닉네임 중복체크
    try {
      const response = await axios.post("/users/nickname", {
        nickname: form.nickname,
      });
      if (response.data.isSuccess) {
        handleErrorMsg("nickname", "");
        handleValidation("nickname", true);
      } else {
        handleErrorMsg("nickname", "이미 사용 중인 닉네임입니다.");
        handleValidation("nickname", false);
      }
    } catch (error) {
      console.error("Error checking nickname availability:", error);
    }
  };

  // 아이디
  const handleIdChange = (e) => {
    const userInput = e.target.value;
    if (/[^a-zA-Z0-9]/.test(userInput) || userInput.includes(" ")) {
      handleErrorMsg(
        "loginId",
        "영어와 숫자만 입력 가능하며, 공백을 포함할 수 없습니다."
      );
      setIsIdBtnDisabled(true);
      handleValidation("loginId", false);
    } else {
      handleErrorMsg("loginId", "");
      setIsIdBtnDisabled(false);
    }
  };

  const handleIdCheck = async (e) => {
    e.preventDefault();

    // 공백 입력 처리
    if (!form.loginId) {
      handleErrorMsg("loginId", "아이디를 입력해주세요.");
      handleValidation("loginId", false);
      return;
    }

    // 아이디 중복체크
    try {
      const response = await axios.post("/users/loginId", {
        loginId: form.loginId,
      });
      if (response.data.isSuccess) {
        handleErrorMsg("loginId", "");
        handleValidation("loginId", true);
      } else {
        handleErrorMsg("loginId", "이미 사용 중인 아이디입니다.");
        handleValidation("loginId", false);
      }
    } catch (error) {
      console.error("Error checking loginId availability:", error);
    }
  };

  // 비밀번호
  useEffect(() => {
    handleErrorMsg("password", "");
    handleErrorMsg("passwordCheck", "");

    if (form.password.length < 8 && form.password.length > 0) {
      handleValidation("password", false);
      handleErrorMsg("password", "8자 이상의 비밀번호를 입력해주세요.");
    } else {
      handleErrorMsg("password", "");

      if (form.passwordCheck) {
        if (form.password === form.passwordCheck) {
          handleValidation("password", true);
          handleErrorMsg("passwordCheck", "");
        } else {
          handleValidation("password", false);
          handleErrorMsg("passwordCheck", "비밀번호가 일치하지 않습니다.");
        }
      }
    }
  }, [form.password, form.passwordCheck]);

  // 핸드폰 번호
  const handlePhoneNumberChange = (e) => {
    if (/[^0-9]/.test(e.target.value)) {
      handleErrorMsg("contact", "숫자만 입력해주세요.");
      handleValidation("contact", false);
    } else if (e.target.value.length < 10 && e.target.value.length > 0) {
      handleErrorMsg("contact", "최소 10자 이상 입력해주세요.");
      handleValidation("contact", false);
    } else {
      handleErrorMsg("contact", "");
      handleValidation("contact", true);
    }
  };

  // 가입 완료하기 버튼 활성화 : form 확인
  useEffect(() => {
    // profile은 버튼 활성화 조건에서 제외
    const { profile, ...formWithoutProfile } = form;
    const isFormValid = Object.keys(formWithoutProfile).every(
      (key) => formWithoutProfile[key]
    );
    // 모든 key에 값이 존재할 경우 isSignUpBtnDisabled를 false로 설정
    setIsSignUpBtnDisabled(!isFormValid);
  }, [form]);

  // 가입 완료하기 버튼 클릭 : valid 확인
  const handleSignUpBtnClick = async (e) => {
    e.preventDefault();

    let profileFile = null;
    if (!form.profile) {
      const response = await fetch(DefaultProfileImg);
      const blob = await response.blob();

      // Blob 객체를 파일 객체로 변환하여 프로필 파일 객체 설정
      profileFile = new File([blob], "DefaultProfileImg.png", {
        type: "image/png",
      });
    } else {
      profileFile = form.profile;
    }

    const formWithProfile = {
      ...form,
      profile: profileFile,
    };

    // valid에 있는 데이터가 모두 true인지 확인
    const isAllValid = Object.values(valid).every((value) => value);
    if (isAllValid) {
      try {
        const formData = new FormData();

        const { profile, ...formWithoutProfile } = formWithProfile;

        formData.append(
          "signupRequest",
          new Blob([JSON.stringify(formWithoutProfile)], {
            type: "application/json",
          })
        );
        formData.append("image", formWithProfile.profile);

        const data = await instance.post(`/users/signup`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(data);
        navigate("/login");
      } catch (e) {
        console.error("에러 : " + e);
      }
    } else {
      // false인 게 존재하면 차례대로 확인
      for (const key in valid) {
        if (!valid[key]) {
          // false인 곳으로 커서 옮김
          document.getElementsByName(key)[0].focus();

          switch (key) {
            case "nickname":
              handleErrorMsg("nickname", "닉네임 중복 확인을 해주세요.");
              break;
            case "loginId":
              handleErrorMsg("loginId", "아이디 중복 확인을 해주세요.");
              break;
            case "password":
              setForm((prevForm) => ({
                ...prevForm,
                password: "",
                passwordCheck: "",
              }));
              break;
            case "contact":
              handleErrorMsg(
                "contact",
                "10자 이상의 올바른 전화번호를 입력해주세요."
              );
              break;
            default:
              break;
          }
          break;
        }
      }
    }
  };

  return (
    <Wrapper>
      <SignUpContainer>
        <Header />
        <Form>
          <Profile form={form} setForm={setForm} />
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
                disabled={isNicknameBtnDisabled}
              />
            }
            errorMsg={errorMsg.nickname}
            passMsg={valid.nickname && "사용 가능한 닉네임입니다."}
          />

          <Input
            title="아이디"
            text={{
              type: "text",
              placeholder: "아이디를 입력해주세요",
              name: "loginId",
              onChange: (e) => {
                handleChange(e);
                handleIdChange(e);
              },
            }}
            duplicate={
              <DuplicateCheckButton
                onClick={handleIdCheck}
                disabled={isIdBtnDisabled}
              />
            }
            errorMsg={errorMsg.loginId}
            passMsg={valid.loginId && "사용 가능한 아이디입니다."}
          />

          <Input
            title="비밀번호"
            text={{
              type: "password",
              placeholder: "8자 이상의 비밀번호를 입력해주세요",
              value: form.password,
              name: "password",
              onChange: (e) => {
                handleChange(e);
              },
            }}
            errorMsg={errorMsg.password}
          />

          <Input
            title="비밀번호 확인"
            text={{
              type: "password",
              placeholder: "비밀번호를 한번 더 입력해주세요",
              value: form.passwordCheck,
              name: "passwordCheck",
              onChange: (e) => {
                handleChange(e);
              },
            }}
            errorMsg={errorMsg.passwordCheck}
          />

          <Input
            title="핸드폰 번호"
            text={{
              type: "text",
              placeholder: "‘-’ 없이 숫자만",
              name: "contact",
              onChange: (e) => {
                handleChange(e);
                handlePhoneNumberChange(e);
              },
            }}
            errorMsg={errorMsg.contact}
          />

          <SignUpButton
            disabled={isSignUpBtnDisabled}
            onClick={handleSignUpBtnClick}
          />
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
