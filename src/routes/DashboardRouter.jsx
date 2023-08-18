import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ALL_EVENTS,
  HOST_EVENTS,
  PARTICIPATED,
} from "../shared/constant/pageRoutes";
import HostEvents from "../Pages/HostEvents/HostEvents";
import AllEvents from "../Pages/AllEvents/AllEvents";
import Participated from "../Pages/Participated/Participated";

const DashboardRouter = () => (
  <Routes>
    <Route path={HOST_EVENTS} element={<HostEvents />} />
    <Route path={ALL_EVENTS} element={<AllEvents />} />
    <Route path={PARTICIPATED} element={<Participated />} />
  </Routes>
);

export default DashboardRouter;
