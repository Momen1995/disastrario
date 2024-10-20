import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./component/Root/Root";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Dashboard from "./component/Dashboard/Dashboard";
import Incidents from "./component/Incidents/Incidents";
import GetStart from "./component/Incidents/GetStart";
import NewIncident from "./component/Incidents/NewIncident";
import IncidentTile from "./component/IncidentTitle/IncidentTile";
// import IncidentWhere from "./component/IncidentWhere/IncidentWhere";
import Locations from "./component/Location/Locations";
import IncidentWhere from "./component/IncidentWhere/IncidentWhere";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/incident",
        element: <Incidents />,
      },
      {
        path: "/getstart",
        element: <GetStart />,
      },
      {
        path: "/newincident",
        element: <NewIncident />,
      },
      {
        path: "/incidenttitle",
        element: <IncidentTile />,
      },
      {
        path: "/incidentwhere",
        element: <IncidentWhere />,
      },
      {
        path: "/locations",
        element: <Locations />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
