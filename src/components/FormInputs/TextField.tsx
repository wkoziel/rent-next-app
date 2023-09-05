import { useController, useFormContext } from 'react-hook-form';
import { SxProps, TextField, TextFieldProps } from '@mui/material';

import { FormField } from './FormControlFieldProps';
import { Loader } from './Loader';

export type FormTextFieldProps = FormField & {
  type?: TextFieldProps['type'];
  select?: boolean;
  sx?: SxProps;
  inline?: boolean;
};

export const FormTextField = (props: FormTextFieldProps) => {
  const { control } = useFormContext();

  const {
    field: { ref, ...fieldProps },
    fieldState,
  } = useController({
    name: props.name,
    control,
    rules: {
      pattern: props.rules?.custom
        ? {
            value: new RegExp(props.rules.custom.value),
            message: props.rules.custom.message,
          }
        : undefined,
      required: props.rules?.required
        ? {
            message: 'This field is required.',
            value: props.rules.required,
          }
        : undefined,
      maxLength: props.rules?.maxLength
        ? {
            message: 'Your input is too long.',
            value: props.rules.maxLength,
          }
        : undefined,
      minLength: props.rules?.minLength
        ? {
            message: 'Your input is too short.',
            value: props.rules.minLength,
          }
        : undefined,
    },
  });

  return (
    <TextField
      ref={ref}
      size="medium"
      fullWidth
      inputRef={ref}
      error={!!fieldState.error}
      inputProps={{ 'aria-errormessage': `${fieldProps.name}-helper-text` }}
      InputProps={{
        endAdornment: props.loading && <Loader />,
      }}
      FormHelperTextProps={{ id: `${fieldProps.name}-helper-text` }}
      helperText={fieldState.error?.message || ' '}
      {...fieldProps}
      {...props}
      value={fieldProps.value || ''}
    />
  );
};
