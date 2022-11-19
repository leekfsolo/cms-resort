import React from "react";
import { authSelector } from "app/selectors";
import { PageUrl } from "configuration/enum";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const auth = useSelector(authSelector);
  const isAuth = auth.status;
  console.log(auth);

  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={PageUrl.LOGIN} state={{ from: location }} replace />
  );
};

export default PrivateRoute;
