import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod'; // Import zod
import Link from 'next/link';

const schema = z.object({
   username: z
      .string()
      .min(3, 'Username must be at least 3 characters')
      .min(1, 'Username is required'),
   password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .min(1, 'Password is required'),
});

const LoginPage = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data: any) => {
      // Validate using Zod schema
      try {
         schema.parse(data);
         // Validation succeeded, implement your login logic here
         console.log('Data:', data);
      } catch (error) {
         console.error('Validation Error:', error);
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
               Login
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
                  label="Password"
                  fullWidth
                  margin="normal"
                  type="password"
                  {...register('password')}
                  error={!!errors.password}
                  helperText={errors.password?.message as string}
               />
               <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
               >
                  Login
               </Button>
            </form>
            <Typography variant="body2" align="center" mt={2}>
               Dont have an account?{' '}
               <Link href="/register" color="primary">
                  Register
               </Link>
            </Typography>
         </Paper>
      </Container>
   );
};

export default LoginPage;
