import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as reactRouter from "react-router-dom";
import LandingPage from "./components/landing/LandingPage.jsx";
import AboutPage from "./components/About/AboutPage.jsx";
import PricingPage from "./components/pricing/PricingPage.jsx";
import ProductPage from "./components/product/ProductPage.jsx";
import SupportPage from "./components/support/SupportPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/support",
        element: <SupportPage />
      },
    ],
  },
]);

console.log(reactRouter);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
