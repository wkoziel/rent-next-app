import { useController, useFormContext } from 'react-hook-form';
import { FormControlLabel, FormControlLabelProps, Switch } from '@mui/material';

export const FormSwitch = (
  props: Required<Pick<FormControlLabelProps, 'label' | 'name'>>,
) => {
  const { control } = useFormContext();
  const {
    field: { ref, value, ...fieldProps },
  } = useController({ name: props.name, control });

  return (
    <FormControlLabel
      control={<Switch />}
      checked={value}
      inputRef={ref}
      {...props}
      {...fieldProps}
    />
  );
};
