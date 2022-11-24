import { CircularProgress } from "@mui/material";
import { useAppSelector } from "app/hooks";
import { globalSelector } from "app/selectors";
import React from "react";

const Loading = () => {
  const { isLoading } = useAppSelector(globalSelector);

  return (
    <div className={`loading ${isLoading ? " loading-open" : ""}`}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
