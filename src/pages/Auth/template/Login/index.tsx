import { Logo } from "assets";
import { PageUrl } from "configuration/enum";
import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginOptions from "./LoginOptions";

const Login = () => {
  const navigate = useNavigate();

  const navigateTo = (destination: string) => {
    navigate(destination);
  };

  return (
    <div className="auth-content__login">
      <img src={Logo} alt="logo" className="img-fluid" loading="lazy" />
      <h1 className="text-center">Login To Connect</h1>

      <LoginForm />

      <div className="login-nav d-flex align-items-center justify-content-between mt-3 mb-4">
        <div className="login-nav__forgotpassword">Forgot password?</div>

        <div
          className="login-nav__register"
          onClick={() => navigateTo(`/${PageUrl.SIGNUP}`)}
        >
          Create account
        </div>
      </div>

      <LoginOptions />
    </div>
  );
};

export default Login;
