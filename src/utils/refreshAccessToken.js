/**
 *
 * @description refreshToken으로
 * 새로운 accessToken을 새롭게 요청한 뒤 반환하는 함수입니다.
 */

import axios from "axios";
import { Cookies } from "react-cookie";

async function refreshAccessToken() {
  const cookies = new Cookies();
  const data = { refreshToken: cookies.get("refreshToken") };
  const res = await axios.post("/users/reissue-token", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { accessToken } = res.data.result;

  return accessToken;
}

export default refreshAccessToken;
