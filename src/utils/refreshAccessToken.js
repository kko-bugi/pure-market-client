/**
 *
 * @description refreshToken����
 * ���ο� accessToken�� ���Ӱ� ��û�� �� ��ȯ�ϴ� �Լ��Դϴ�.
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
    if (res.data.isSuccess === false) return "";
    else return res.data.result.accessToken;
  } catch (e) {
    console.log(e);
  }
}

export default refreshAccessToken;
