import axios from "axios";
import refreshAccessToken from "./utils/refreshAccessToken";

const instance = axios.create({
  baseURL: "http://35.212.150.138:8080/api/v1",
  timeout: 2000,
});

instance.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  async (err) => {
    if (err.response?.status === 401 || err.response?.status === 403) {
      const accessToken = await refreshAccessToken();
      err.config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      const res = await axios.request(err.config);
      return res;
    }
    return Promise.reject(err);
  }
);

export default instance;
