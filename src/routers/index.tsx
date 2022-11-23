import React from "react";
import { PageUrl } from "configuration/enum";
import Auth from "pages/Auth";
import Home from "pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Signup from "pages/Auth/template/Signup";
import Login from "../pages/Auth/template/Login";
import Loading from "components/Loading";
import { useSelector } from "react-redux";
import { globalSelector } from "app/selectors";

const Routers = () => {
  const { isLoading } = useSelector(globalSelector);

  return (
    <Router>
      <Loading isOpen={isLoading} />
      <Routes>
        <Route element={<Auth />}>
          <Route index path={PageUrl.LOGIN} element={<Login />} />
          <Route path={PageUrl.SIGNUP} element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={PageUrl.HOME} element={<Home />} />
        </Route>
        <Route path={PageUrl.ALL} element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default Routers;
