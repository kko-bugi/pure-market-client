/**
 * @description id와 pw를 받아서 Refresh Token을 쿠키에
 * 저장하고 AccessToken을 로컬 변수에 저장하는 Hook입니다.
 */

import axios from "axios";
import { useCookies } from "react-cookie";
import { useAccessToken } from "./useAccessToken";

export default function useToken({ id, pw }) {
  const [, setCookie] = useCookies(["refreshToken"]);
  const [accessToken, setAccessToken] = useAccessToken();
  const data = { loginId: id, password: pw };

  function setRefreshToken(token) {
    // [TODO] production 에서는 이걸로 바꾸기
    // setCookie("refreshToken", token, {
    //   secure: true,
    //   httpOnly: true,
    // });
    setCookie("refreshToken", token);
  }

  const handleLogin = async () => {
    try {
      // [TODO] production 에서는 이걸로 바꾸기
      //   const res = await axios.post("", data, {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   const { accessToken, refreshToken } = res.data.result;

      setRefreshToken("hi");
      setAccessToken(accessToken);
    } catch (e) {
      console.error(e);
    }
  };

  handleLogin();

  return accessToken;
}
