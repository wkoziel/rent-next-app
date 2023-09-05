import { useController, useFormContext } from 'react-hook-form';
import {
  Checkbox,
  FormControlLabel,
  FormControlLabelProps,
} from '@mui/material';

export const FormCheckbox = (
  props: Required<Pick<FormControlLabelProps, 'label' | 'name'>>,
) => {
  const { control } = useFormContext();
  const {
    field: { ref, value, ...fieldProps },
  } = useController({ name: props.name, control });

  return (
    <FormControlLabel
      control={<Checkbox />}
      checked={value}
      inputRef={ref}
      {...props}
      {...fieldProps}
    />
  );
};
