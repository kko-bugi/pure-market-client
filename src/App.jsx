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
import SignUp from "./pages/SignUp/index";
import Market from "./pages/Market/index";
import MarketWrite from "./pages/Market/Write";
import ProductDetailed from "./pages/Market/$id";
import Recipe from "./pages/Recipe/index";
import RecipeWrite from "./pages/Recipe/Write";
import RecipeDetailed from "./pages/Recipe/$id";
import Share from "./pages/Share/index";
import ShareWrite from "./pages/Share/Write";
import ShareDetailed from "./pages/Share/$id";

import { accessTokenState } from "./atoms/accessTokenState";

function App() {
  const accessToken = useRecoilValue(accessTokenState);
  const loginLoader = async () => {
    // [TODO] accessToken �޾ƿ���...�ƴϸ� ���� ����?
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
      path: "/signUp",
      element: <SignUp />,
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
    {
      path: "/recipe",
      element: <Recipe />,
    },
    {
      path: "/recipe/write",
      element: <RecipeWrite />,
      loader: loginLoader,
    },
    {
      path: "/recipe/:id",
      element: <RecipeDetailed />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/share",
      element: <Share />,
    },
    {
      path: "/share/write",
      element: <ShareWrite />,
      loader: loginLoader,
    },
    {
      path: "/share/:id",
      element: <ShareDetailed />,
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
