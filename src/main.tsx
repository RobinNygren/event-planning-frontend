import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { FrontPage } from "./routes/FrontPage";
import { EventPage } from "./routes/EventPage";
import { EventFeedPage } from "./routes/EventFeedPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
    errorElement: <div>404 not found</div>,
    children: [
      {
        path: "event-feed",
        element: <EventFeedPage />,
      },
      {
        path: "event/:eventTitle", //dynamisk länk baserat på eventnamn/id? useParams?
        element: <EventPage />,
      },
      {},
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
