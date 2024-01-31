import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";

// Pages
import Main from "./pages/index";
import Login from "./pages/Login/index";
import Market from "./pages/Market/index";
import MarketWrite from "./pages/Market/Write";
import ProductDetailed from "./pages/Market/$id";

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
  },
  {
    path: "/market/:id",
    element: <ProductDetailed />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
