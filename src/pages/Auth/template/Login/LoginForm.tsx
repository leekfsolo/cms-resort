import React from "react";
import { FormControl, Button } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import CInput from "components/CInput";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { IFormLogin } from "pages/Auth/interface";
import { useAppDispatch } from "app/hooks";
import { PageUrl } from "configuration/enum";
import { handleLoading } from "app/globalSlice";
import { login } from "pages/Auth/authSlice";

const LoginForm = () => {
  const { handleSubmit, control } = useForm<IFormLogin>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitFormHandler: SubmitHandler<IFormLogin> = async (data) => {
    dispatch(handleLoading(true));
    try {
      if (data.username && data.password) {
        const dataResponse: any = await dispatch(login(data)).unwrap();

        if (dataResponse.success) {
          navigate(`../${PageUrl.HOME}`);
        }
      }
    } catch (e) {
      console.error(e, "loginForm:32");
    } finally {
      dispatch(handleLoading(false));
    }
  };

  return (
    <form
      className="login-form w-100"
      onSubmit={handleSubmit(submitFormHandler)}
      method="POST"
      action="#"
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard" className="w-100 d-flex flex-column">
        <Controller
          name={"username"}
          control={control}
          render={({ field }) => (
            <CInput
              {...field}
              label="Username"
              placeholder="example@gmail.com"
              starticon={<PersonIcon />}
              className="mb-4"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <CInput
              type="password"
              label="Password"
              {...field}
              placeholder="Enter your password"
              starticon={<LockIcon />}
              endicon={<VisibilityIcon />}
              className="mb-4"
            />
          )}
        />

        <div className="login-form__button w-100 text-center">
          <Button className="py-3 w-100" variant="contained" type="submit">
            Login
          </Button>
        </div>
      </FormControl>
    </form>
  );
};

export default LoginForm;
