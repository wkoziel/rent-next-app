import React, { useState } from 'react';
import {
   Container,
   Paper,
   Typography,
   TextField,
   Button,
   Link,
   Snackbar,
   Alert,
   AlertColor,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z
   .object({
      username: z.string().min(3, 'Username must be at least 3 characters'),
      email: z.string().email('Invalid email address'),
      password: z.string().min(6, 'Password must be at least 6 characters'),
      confirmPassword: z
         .string()
         .min(6, 'Password must be at least 6 characters'),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
   });

type FormType = z.infer<typeof schema>;

const RegisterPage = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormType>();
   const [snackbarOpen, setSnackbarOpen] = useState(false);
   const [snackbarMessage, setSnackbarMessage] = useState('');
   const [snackbarSeverity, setSnackbarSeverity] =
      useState<AlertColor>('success');

   const handleSnackbarClose = () => {
      setSnackbarOpen(false);
   };

   const handleSnackbar = (message: string, severity: AlertColor) => {
      setSnackbarMessage(message);
      setSnackbarSeverity(severity);
      setSnackbarOpen(true);
   };

   const onSubmit = (data: FormType) => {
      try {
         schema.parse(data);
         // Validation succeeded, implement your registration logic here
         console.log('Data:', data);
         handleSnackbar('Registration successful!', 'success');
      } catch (error) {
         console.error('Validation Error:', error);
         handleSnackbar(
            'Registration failed. Please check your data.',
            'error'
         );
      }
   };

   return (
      <Container
         maxWidth="xs"
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
         }}
      >
         <Paper elevation={3} sx={{ padding: 3, width: '100%' }}>
            <Typography variant="h5" align="center" gutterBottom>
               Register
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
               <TextField
                  label="Username"
                  fullWidth
                  margin="normal"
                  {...register('username')}
                  error={!!errors.username}
                  helperText={errors.username?.message as string}
               />
               <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  type="email"
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors.email?.message as string}
               />
               <TextField
                  label="Password"
                  fullWidth
                  margin="normal"
                  type="password"
                  {...register('password')}
                  error={!!errors.password}
                  helperText={errors.password?.message as string}
               />
               <TextField
                  label="Confirm Password"
                  fullWidth
                  margin="normal"
                  type="password"
                  {...register('confirmPassword')}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message as string}
               />
               <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
               >
                  Register
               </Button>
            </form>
         </Paper>
         <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
         >
            <Alert severity={snackbarSeverity} onClose={handleSnackbarClose}>
               {snackbarMessage}
            </Alert>
         </Snackbar>
      </Container>
   );
};

export default RegisterPage;
