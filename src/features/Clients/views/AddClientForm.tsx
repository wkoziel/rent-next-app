import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';
import { z } from 'zod';

import { FormTextField } from '@/components/FormInputs';

type AddClientFormProps = {
  open: boolean;
  onClose: () => void;
};

const schema = z.object({
  firstname: z.string().nonempty({ message: 'Pole wymagane' }).default(''),
  lastname: z.string().nonempty({ message: 'Pole wymagane' }).default(''),
  address: z.string().nonempty({ message: 'Pole wymagane' }).default(''),
  email: z
    .string()
    .email({
      message: 'Niepoprawny adres email',
    })
    .nonempty({ message: 'Pole wymagane' })
    .default(''),
  phone: z
    .string()
    .nonempty({ message: 'Pole wymagane' })
    .default('')
    .refine((value) => {
      if (value.length !== 9) {
        return {
          message: 'Numer telefonu musi mieć 9 cyfr',
          path: ['phone'],
        };
      }

      return true;
    }),
});

type FormValues = z.infer<typeof schema>;

export const AddClientForm = ({ open, onClose }: AddClientFormProps) => {
  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  });

  const { handleSubmit, reset } = methods;

  const handleFormSubmit = (data: FormValues) => {
    // schema.parse(data);
    console.log(data);
    // onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          p: 3,
        },
      }}
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <DialogTitle>Dodaj nowego użytkownika</DialogTitle>
          <DialogContent>
            <Grid container columnSpacing={2}>
              <Grid item xs={6}>
                <FormTextField label="Imię" name="firstname" />
              </Grid>
              <Grid item xs={6}>
                <FormTextField label="Nazwisko" name="lastname" />
              </Grid>
              <Grid item xs={12}>
                <FormTextField label="Adress" name="address" />
              </Grid>
              <Grid item xs={6}>
                <FormTextField label="Email" name="email" />
              </Grid>
              <Grid item xs={6}>
                <FormTextField label="Telefon" name="phone" />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="text" onClick={() => reset()}>
              Resetuj
            </Button>
            <Button variant="outlined" onClick={onClose}>
              Anuluj
            </Button>
            <Button type="submit" variant="contained">
              Dodaj
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  );
};
