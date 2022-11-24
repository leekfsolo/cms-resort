import React from "react";
import { PageUrl } from "configuration/enum";
import Auth from "pages/Auth";
import Home from "pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Signup from "pages/Auth/template/Signup";
import Login from "../pages/Auth/template/Login";
import Loading from "components/Loading";
import MainLayout from "components/MainLayout";
import Customer from "pages/Customer";
import Room from "pages/Room";
import ModalBackdrop from "components/ModalBackdrop";

const Routers = () => {
  return (
    <Router>
      <Loading />
      <ModalBackdrop />
      <Routes>
        <Route element={<Auth />}>
          <Route index path={PageUrl.LOGIN} element={<Login />} />
          <Route path={PageUrl.SIGNUP} element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={PageUrl.ROOT} element={<MainLayout />}>
            <Route index path={PageUrl.HOME} element={<Home />} />
            <Route path={PageUrl.CUSTOMER} element={<Customer />} />
            <Route path={PageUrl.ROOM} element={<Room />} />
          </Route>
        </Route>
        <Route path={PageUrl.ALL} element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default Routers;
