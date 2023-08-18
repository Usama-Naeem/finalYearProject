import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrganizerSignin from "../Pages/OrganizerSignin/OrganizerSignin";
import Services from "../Pages/ServicesPage/Services";
import Testimonials from "../Pages/Testimonials/Testimonials";
import Contact from "../Pages/Contact/ContactUs";
import {
  CONTACT,
  DASHBOARD,
  EVENTS,
  HOME,
  ORGANIZER_SIGNIN,
  ORGANIZER_SIGNUP,
  SERVICES,
  TESTIMONIAL,
} from "../shared/constant/pageRoutes";
import Home from "../Pages/Home/Home";
import Header from "../components/Header/Header";
import UpcommingEvents from "../Pages/UpcommingEvents/UpcommingEvents";
import PersistRoutes from "./PersistedRoute";
import OrganizerSignup from "../Pages/OrganizerSignup/OrganizerSignup";
import PrivateRoute from "./PrivateRoute";
import OrganizerDashboard from "../components/OrganizerDashboard/OrganizerDashboard";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Persisted Routes */}
          <Route element={<PersistRoutes />}>
            <Route path={ORGANIZER_SIGNIN} element={<OrganizerSignin />} />
            <Route path={ORGANIZER_SIGNUP} element={<OrganizerSignup />} />
          </Route>
          {/* Protected Routes */}
          <Route
            path={DASHBOARD}
            element={
              <PrivateRoute>
                <OrganizerDashboard />
              </PrivateRoute>
            }
          />
          {/* Public Routes */}
          <Route path={HOME} element={<Home />} />
          <Route path={SERVICES} element={<Services />} />
          <Route path={TESTIMONIAL} element={<Testimonials />} />
          <Route path={CONTACT} element={<Contact />} />
          <Route path={EVENTS} element={<UpcommingEvents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
