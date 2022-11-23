import { CircularProgress } from "@mui/material";
import React from "react";

type Props = {
  isOpen: boolean;
};

const Loading = ({ isOpen }: Props) => {
  return (
    <div className={`loading${isOpen ? " loading-open" : ""}`}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
