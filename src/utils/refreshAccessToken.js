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
  try {
    const res = await axios.post("/users/reissue-token", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.isSuccessful === false) {
      return Error(res.data.code);
    } else return res.data.result.accessToken;
  } catch (e) {
    cookies.remove("refreshToken", { path: "/" });
    console.log(e);
  }
}

export default refreshAccessToken;
