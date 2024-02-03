import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { useRecoilValue } from "recoil";

// Pages
import ErrorPage from "./ErrorPage";
import Main from "./pages/index";
import Login from "./pages/Login/index";
import Market from "./pages/Market/index";
import MarketWrite from "./pages/Market/Write";
import ProductDetailed from "./pages/Market/$id";

import { accessTokenState } from "./atoms/accessTokenState";

function App() {
  const accessToken = useRecoilValue(accessTokenState);
  const loginLoader = async () => {
    // [TODO] accessToken 받아오기...아니면 유저 정보?
    if (accessToken === "") {
      return redirect("/login");
    }
    return null;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/market",
      element: <Market />,
    },
    {
      path: "/market/write",
      element: <MarketWrite />,
      loader: loginLoader,
    },
    {
      path: "/market/:id",
      element: <ProductDetailed />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
