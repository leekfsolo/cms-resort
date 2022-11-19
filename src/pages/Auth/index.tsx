import { PageUrl } from "configuration/enum";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(PageUrl.LOGIN);
  }, []);

  return (
    <div className="auth">
      <div className="auth-background"></div>
      <div className="auth-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
