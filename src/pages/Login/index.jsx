import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { accessTokenState } from "../../atoms/accessTokenState";
import Template from "../../components/Template";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPW] = useState("");
  const setAccessToken = useSetRecoilState(accessTokenState);

  const [, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const data = { loginId: id, password: pw };

      const res = await axios.post("/users/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { accessToken, refreshToken } = res.data.result;
      removeCookie("refreshToken");
      setCookie("refreshToken", refreshToken, { path: "/" });
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      setAccessToken(accessToken);
      navigate(-1);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Template>
      <Title>로그인</Title>
      <Form
        id="loginForm"
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <Input
          required
          type="text"
          name="loginId"
          placeholder="아이디를 입력해주세요"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <Input
          required
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => {
            setPW(e.target.value);
          }}
        />

        <BtnsWrapper>
          <LoginBtn type="submit" value="로그인" />
          <SignUpBtn
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </SignUpBtn>
        </BtnsWrapper>
      </Form>
    </Template>
  );
}

export default Login;

const Title = styled.h1`
  color: #000;
  font-size: 28px;
  font-weght: 600;
  line-height: 85.714%;
  margin-bottom: 60px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const Input = styled.input`
  color: #000;
  background-color: white;
  width: 310px;
  height: 54px;
  border: 1px solid #ddd3d3;
  border-radius: 5px;
  padding: 0 15px;
  &::placeholder {
    color: #333;
    font-size: 14px;
    font-weight: 500;
    line-height: 171.429%;
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 60px;
`;

const LoginBtn = styled.input.attrs({ type: "submit" })`
  width: 340px;
  height: 54px;
  border: none;
  border-radius: 5px;
  background-color: #8de6b4;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`;

const SignUpBtn = styled.button`
  width: 340px;
  height: 54px;
  background-color: white;
  color: #8de6b4;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  border: 1px solid #8de6b4;
  border-radius: 5px;
`;
