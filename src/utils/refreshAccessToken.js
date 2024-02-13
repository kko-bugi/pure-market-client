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
  const res = await axios.post("/users/reissue-token", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { accessToken } = res.data.result;

  return accessToken;
}

export default refreshAccessToken;
