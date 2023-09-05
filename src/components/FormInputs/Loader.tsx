import { CircularProgress, CircularProgressProps } from "@mui/material";

export const Loader = ({ ...props }: CircularProgressProps) => {
  return <CircularProgress {...props} />;
};
