import { useController, useFormContext } from "react-hook-form";
import { Slider, SxProps } from "@mui/material";

import { FormField } from "./FormControlFieldProps";

export type FormSliderProps = FormField & {
  sx?: SxProps;
};

export const FormSlider = (props: FormSliderProps) => {
  const { control, setValue } = useFormContext();

  const {
    field: { ...fieldProps },
  } = useController({
    name: props.name,
    control,
  });

  return (
    <Slider
      {...fieldProps}
      onChange={(event: Event, value: number | number[]) => {
        setValue(fieldProps.name, value, {
          shouldDirty: true,
          shouldValidate: true,
        });
      }}
      sx={props.sx}
    />
  );
};
