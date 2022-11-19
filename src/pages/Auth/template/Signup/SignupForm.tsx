import React from "react";
import { FormControl, Button } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IFormSignup } from "pages/Auth/interface";
import CInput from "components/CInput";

const SignupForm = () => {
  const { handleSubmit, control } = useForm<IFormSignup>();

  const submitFormHandler: SubmitHandler<IFormSignup> = (data) => {};

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
          name="account"
          control={control}
          render={({ field }) => (
            <CInput
              field={field}
              label="Username"
              placeholder="example@gmail.com"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <CInput
              field={field}
              label="Password"
              placeholder="Enter your password"
            />
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <CInput
              field={field}
              label="Confirm Password"
              placeholder="Re-Enter your password"
            />
          )}
        />

        <div className="login-form__button w-100 text-center">
          <Button className="py-3 w-100" variant="contained" type="submit">
            Sign up
          </Button>
        </div>
      </FormControl>
    </form>
  );
};

export default SignupForm;
