import {
  Box,
  InputAdornment,
  TextField,
  BaseTextFieldProps,
} from "@mui/material";
import React, { forwardRef, ReactElement, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface Props extends BaseTextFieldProps {
  endicon?: ReactElement;
  starticon?: ReactElement;
  valid?: boolean;
}

const CInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    starticon = null,
    endicon = null,
    type,
    className,
    valid = true,
  } = props;
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <TextField
      {...Object.assign({}, props, { valid: undefined })}
      className={`cinput ${className} cinput-${valid ? "valid" : "invalid"}`}
      InputProps={{
        startAdornment: starticon && (
          <InputAdornment position="start">{starticon}</InputAdornment>
        ),
        endAdornment: endicon && (
          <InputAdornment position="end">
            {type === "text" ? (
              <>{endicon}</>
            ) : (
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? endicon : <VisibilityOffIcon />}
              </Box>
            )}
          </InputAdornment>
        ),
      }}
      ref={ref}
      variant="outlined"
      type={isShowPassword ? "text" : type}
      fullWidth
      minRows={4}
    />
  );
});

export default CInput;
