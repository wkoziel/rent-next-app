import { useController, useFormContext } from 'react-hook-form';
import { Box, InputLabel, TextField, TextFieldProps } from '@mui/material';
import {
  DatePicker as MuiDatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { FormField } from './FormControlFieldProps';

export type DatePickerProps = FormField & {
  inputFormat?: string;
  mask?: string;
};

export const FormDatePicker = ({
  label,
  name,
  mask,
  required,
}: DatePickerProps) => {
  const { control, setValue } = useFormContext();
  const {
    field: { ref, ...fieldProps },
    fieldState: { error },
  } = useController({
    name: name,
    control,
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        inputRef={ref}
        {...fieldProps}
        onChange={(value: Date | null) => {
          setValue(name, value, { shouldDirty: true, shouldValidate: true });
        }}
        mask={mask}
        renderInput={(props: TextFieldProps) => (
          <Box>
            <InputLabel htmlFor={name} required={required}>
              {label}
            </InputLabel>
            <TextField
              {...props}
              name={name}
              size="medium"
              error={!!error}
              fullWidth
              helperText={error?.message ?? ''}
            />
          </Box>
        )}
        value={fieldProps.value || null}
      />
    </LocalizationProvider>
  );
};
