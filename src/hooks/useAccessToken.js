import axios from "axios";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../atoms/accessTokenState";

export function useAccessToken() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  return [accessToken, setAccessToken];
}

/**
 *
 * @description id�� refreshToken ������
 * accessToken�� ���Ӱ� ��û �� AccessToken��
 * ���ÿ� �����ϴ� Hook�Դϴ�.
 */
export async function useRefreshAccessToken({ id }) {
  const [refreshToken] = useCookies(["refreshToken"]);
  const [, setAccessToken] = useAccessToken();
  const data = {
    loginId: id,
    refreshToken: refreshToken,
  };

  const res = await axios.post("", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { accessToken } = res.data.result;
  setAccessToken(accessToken);
}
