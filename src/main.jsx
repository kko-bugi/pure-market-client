import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";

import "./index.css";

// axios.defaults.baseURL =""; // [TODO] 백엔드 연결 시 등록
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
