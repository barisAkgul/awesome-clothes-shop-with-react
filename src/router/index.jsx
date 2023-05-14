import { createBrowserRouter } from "react-router-dom";

import { MainLayouts } from "@layouts/main";

export const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children: [
      {
        errorElement: <h1>Error Page</h1>,
        children: [
          {
            path: "/",
            element: <div>HomePage</div>,
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
