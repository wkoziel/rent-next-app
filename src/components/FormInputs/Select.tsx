import { PropsWithChildren } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { MenuItem, TextField, TextFieldProps } from '@mui/material';

import { FormField } from './FormControlFieldProps';

type Option = {
  label: string;
  value: number;
};

export type SelectProps = TextFieldProps & {
  options: Option[];
};

export const Select = ({ options, ...props }: SelectProps) => {
  return (
    <TextField select {...props} fullWidth>
      {options.map((option) => (
        <MenuItem key={option.label} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export type FormSelectFieldProps = PropsWithChildren<
  FormField & {
    options: SelectProps['options'];
  }
>;

export const FormSelect = ({
  label,
  required,
  name,
  options,
}: FormSelectFieldProps) => {
  const { control } = useFormContext();
  const {
    field: { ref, ...fieldProps },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Select
      label={label}
      required={required}
      select
      size="medium"
      options={options}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      {...fieldProps}
      value={fieldProps.value}
    />
  );
};
