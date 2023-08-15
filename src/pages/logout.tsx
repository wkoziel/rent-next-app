import { useEffect } from 'react';
import { Typography } from '@mui/material';

import { useAuth } from '@/contexts/AuthContext';

export default function LogoutPage() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, []);

  return <Typography variant="h1">Logout</Typography>;
}
