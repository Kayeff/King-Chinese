import "./index.css";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Fallback from "./components/Fallback.jsx";
const Home = lazy(() => import("./pages/Home.jsx"));
const MenuPage = lazy(() => import("./pages/MenuPage.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Fallback />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "menu",
          element: (
            <Suspense fallback={<Fallback />}>
              <MenuPage />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<Fallback />}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
  ],
  { basename: "/King-Chinese/" }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
