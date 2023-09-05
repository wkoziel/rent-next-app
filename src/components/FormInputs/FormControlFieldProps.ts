import React from "react";
import { FormControlProps } from "@mui/material";

export type FormControlFieldProps = {
  name: string;
  label: React.ReactNode;
  formControl?: FormControlProps;
};

export type FormField = {
  name: string;
  label: React.ReactNode;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules?: any;
  loading?: boolean;
};
