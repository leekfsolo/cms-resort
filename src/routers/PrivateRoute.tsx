import React from "react";
import { PageUrl } from "configuration/enum";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUserId } from "utils/getUserId";

const PrivateRoute = () => {
  const location = useLocation();
  const isAuth = getUserId() !== "";

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={PageUrl.LOGIN} state={{ from: location }} replace />
  );
};

export default PrivateRoute;
