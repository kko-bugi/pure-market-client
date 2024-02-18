import axios from "axios";
import { Cookies } from "react-cookie";
import refreshAccessToken from "./utils/refreshAccessToken";

const instance = axios.create({
  baseURL: "http://35.212.150.138:8080/api/v1",
  timeout: 2000,
});

instance.interceptors.request.use(
  async (config) => {
    const cookies = new Cookies();
    if (cookies.get("refreshToken") !== undefined) {
      const accessToken = await refreshAccessToken();
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;
