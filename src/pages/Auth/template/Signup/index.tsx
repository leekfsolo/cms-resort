import React from "react";

import { Logo } from "assets";
import { PageUrl } from "configuration/enum";
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-content__signup">
      <img src={Logo} alt="logo" className="img-fluid" loading="lazy" />
      <h1 className="text-center">Welcome to Connect</h1>
      <SignupForm />

      <div className="signup-nav text-center mt-3">
        I'm already a member!&nbsp;
        <span onClick={() => navigate(`/${PageUrl.LOGIN}`)}>Login</span>
      </div>
    </div>
  );
};

export default Signup;
