import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <div>MainLayout</div>,
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
