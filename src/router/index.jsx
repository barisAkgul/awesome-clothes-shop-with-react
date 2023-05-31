import { createBrowserRouter } from "react-router-dom";

import { MainLayouts } from "@layouts/main";

//pages
import { HomePage } from "@pages/home-page/HomePage.jsx";
import { SingleProductPage } from "@pages/single-product-page/SingleProductPage";
import { SuccessPage } from "@pages/success-page/SuccessPage";

export const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children: [
      {
        errorElement: <h1>Error Page</h1>,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "detail/:productId",
            element: <SingleProductPage />,
          },
          {
            path: "success",
            element: <SuccessPage />,
          },
          {
            path: "*",
            element: <h1>Page Not Found</h1>,
          },
        ],
      },
    ],
  },
]);
