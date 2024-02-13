import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { Cookies } from "react-cookie";

// Pages
import ErrorPage from "./ErrorPage";
import Main from "./pages/index";
import Login from "./pages/Login/index";
import Market from "./pages/Market/index";
import MarketWrite from "./pages/Market/Write";
import ProductDetailed from "./pages/Market/$id";

function App() {
  const cookies = new Cookies();

  const loginLoader = async () => {
    if (cookies.get("refreshToken") === undefined) {
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
