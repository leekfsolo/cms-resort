import React from "react";
import { Box, FormHelperText, Typography } from "@mui/material";
import { IRoomType, IAddRoomTypeInput } from "pages/model";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { FormGroup } from "@mui/material";
import CInput from "components/CInput";
import CButton from "components/CButton";
import { addRoomType, initRoomtype } from "../roomSlice";
import { useAppDispatch } from "app/hooks";
import { handleLoading } from "app/globalSlice";

type Props = {
  registerSections: IAddRoomTypeInput[];
};

const RegisterForm = (props: Props) => {
  const { registerSections } = props;
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IRoomType>({ defaultValues: initRoomtype });
  const resetValues = () => {
    const form = document.getElementById("addRoomType-form");

    form?.classList.remove("wasvalidated");
    reset(initRoomtype);
  };

  const onValidSubmit: SubmitHandler<IRoomType> = async (data) => {
    // Just for test
    dispatch(handleLoading(true));
    try {
      await dispatch(addRoomType(data));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(handleLoading(false));
      resetValues();
    }
  };
  const onInvalidSubmit: SubmitErrorHandler<IRoomType> = (data, event) => {
    event?.target.classList.add("wasvalidated");
  };

  const rulesValidation = (item: IAddRoomTypeInput) => {
    let validator = {
      required: { value: true, message: "This field is required" },
    };
    if (item.type === "number") {
      Object.assign(validator, {
        min: { value: 1, message: "Please enter a positive number" },
      });
    }
    if (item.name === "bedinforNoBeds" || item.name === "roomtypeNoGuests") {
      Object.assign(validator, {
        max: { value: 10, message: "Please enter a number between 1 and 10" },
      });
    }
    if (item.name === "bedinforSize") {
      Object.assign(validator, {
        validate: (value: number) =>
          (value >= 1.0 && value < 10.0) || "Please enter the correct format",
      });
    }

    return validator;
  };

  return (
    <form
      onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}
      method="POST"
      action="#"
      noValidate
      id="addRoomType-form"
    >
      <FormGroup className="register-section__inputs">
        {registerSections.map((row) => {
          return (
            <div key={row.id} className="input-row w-100">
              <div className="input-row__label">
                <label htmlFor={row.id}>
                  {row.label}
                  <span className="required">* </span>
                  {row.name === "roomtypeArea" && (
                    <small>
                      (m<sup style={{ fontSize: "12px" }}>2</sup>)
                    </small>
                  )}
                </label>
              </div>
              <div className="input-row__field">
                {row.items ? (
                  <div className="row m-0 justify-content-between">
                    {row.items.map((item) => (
                      <Box
                        key={item.id}
                        sx={{ position: "relative" }}
                        className="col-5 p-0 mt-2"
                      >
                        <Typography
                          sx={{
                            position: "absolute",
                            top: "-18px",
                            left: 0,
                            fontSize: "12px",
                          }}
                        >
                          {item.placeholder}
                        </Typography>
                        <Controller
                          control={control}
                          name={item.name}
                          rules={rulesValidation(item)}
                          render={({ field }) => (
                            <CInput
                              {...field}
                              id={item.id}
                              placeholder={item.placeholder}
                              type={item.type}
                              valid={!errors[item.name]}
                            />
                          )}
                        />
                        {errors[item.name] && (
                          <FormHelperText className="form-helper-text">
                            {errors[item.name]?.message}
                          </FormHelperText>
                        )}
                      </Box>
                    ))}
                  </div>
                ) : (
                  <Box sx={{ position: "relative" }}>
                    <Controller
                      control={control}
                      name={row.name}
                      rules={rulesValidation(row)}
                      render={({ field }) => (
                        <CInput
                          {...field}
                          id={row.id}
                          placeholder={row.placeholder}
                          type={row.type}
                          valid={!errors[row.name]}
                          multiline={row.name === "roomtypeDescription"}
                        />
                      )}
                    />
                    {errors[row.name] && (
                      <FormHelperText className="form-helper-text">
                        {errors[row.name]?.message}
                      </FormHelperText>
                    )}
                  </Box>
                )}
              </div>
            </div>
          );
        })}
      </FormGroup>

      <div className="register-button">
        <CButton
          type="reset"
          variant="outlined"
          color="error"
          onClick={resetValues}
        >
          Reset
        </CButton>
        <CButton type="submit" variant="outlined">
          Create
        </CButton>
      </div>
    </form>
  );
};

export default RegisterForm;
