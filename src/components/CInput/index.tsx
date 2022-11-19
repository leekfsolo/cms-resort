import { Box, InputAdornment, TextField } from "@mui/material";
import React, { HTMLInputTypeAttribute } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { TextFieldProps } from "@mui/material/TextField";

type Props = {
  field: any;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
};

const CInput = (props: Props) => {
  const {
    field,
    label,
    placeholder,
    startIcon = null,
    endIcon = null,
    type = "text",
  } = props;

  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false);

  const textFieldProps: TextFieldProps = {
    label,
    placeholder,
    ...field,
    value: field.value || "",
    InputProps: {
      startAdornment: startIcon && (
        <InputAdornment position="start">{startIcon}</InputAdornment>
      ),
      endAdornment: endIcon && (
        <InputAdornment position="end">
          {type === "text" ? (
            <>{endIcon}</>
          ) : (
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? endIcon : <VisibilityOffIcon />}
            </Box>
          )}
        </InputAdornment>
      ),
    },
    type: type === "text" ? type : isShowPassword ? "text" : "password",
    className: "mb-4",
  };

  return <TextField {...textFieldProps} />;
};

export default CInput;
