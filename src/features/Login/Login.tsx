import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { z } from 'zod';

import { useAuth } from '@/contexts/AuthContext';

const schema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .min(1, 'Password is required'),
});

type FormValues = z.infer<typeof schema>;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
  });
  const { login } = useAuth();

  const onSubmit = (data: FormValues) => {
    try {
      schema.parse(data);
      login(data.email, data.password);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <Typography variant="h5" align="center" gutterBottom>
              Zaloguj
            </Typography>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Zaloguj się
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};
