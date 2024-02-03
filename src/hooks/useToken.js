/**
 * @description id�� pw�� �޾Ƽ� Refresh Token�� ��Ű��
 * �����ϰ� AccessToken�� ���� ������ �����ϴ� Hook�Դϴ�.
 */

import axios from "axios";
import { useCookies } from "react-cookie";
import { useAccessToken } from "./useAccessToken";

export default function useToken({ id, pw }) {
  const [, setCookie] = useCookies(["refreshToken"]);
  const [accessToken, setAccessToken] = useAccessToken();
  const data = { loginId: id, password: pw };

  function setRefreshToken(token) {
    // [TODO] production ������ �̰ɷ� �ٲٱ�
    // setCookie("refreshToken", token, {
    //   secure: true,
    //   httpOnly: true,
    // });
    setCookie("refreshToken", token);
  }

  const handleLogin = async () => {
    try {
      // [TODO] production ������ �̰ɷ� �ٲٱ�
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
