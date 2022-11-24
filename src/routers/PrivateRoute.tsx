import React from "react";
import { PageUrl } from "configuration/enum";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUsername } from "utils/getUsername";

const PrivateRoute = () => {
  const location = useLocation();
  const isAuth = getUsername() !== "";

  return true ? (
    <Outlet />
  ) : (
    <Navigate to={PageUrl.LOGIN} state={{ from: location }} replace />
  );
};

export default PrivateRoute;
