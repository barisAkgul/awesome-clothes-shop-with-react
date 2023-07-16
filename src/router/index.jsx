import { createBrowserRouter } from "react-router-dom";

import { MainLayouts } from "@layouts/main";

//pages
import { HomePage } from "@pages/home-page/HomePage.jsx";
import { SingleProductPage } from "@pages/single-product-page/SingleProductPage";
import { SuccessPage } from "@pages/success-page/SuccessPage";
import { ProductsPage } from "@pages/products-page/ProductsPage";
import { BlogPage } from "@pages/blog-page/BlogPage";
import { ErrorPage } from "@components/common/error/ErrorPage";
import { PageNotFound } from "@components/common/page-not-found/PageNotFound";

export const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children: [
      {
        errorElement: <ErrorPage />,
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
            path: "products",
            element: <ProductsPage />,
          },
          {
            path: "blog",
            element: <BlogPage />,
          },
          {
            path: "success",
            element: <SuccessPage />,
          },
          {
            path: "*",
            element: <PageNotFound />,
          },
        ],
      },
    ],
  },
]);
