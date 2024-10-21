import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrontPage } from "./routes/FrontPage";
import { EventPage } from "./routes/EventPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
    children: [
      {
        path: "event-page", //dynamisk länk baserat på eventnamn? useParams?
        element: <EventPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
