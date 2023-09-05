import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import Sidebar from '../components/Sidebar/Sidebar';
import { AuthProvider } from '../contexts/AuthContext';
import i18n from '../lib/i18n';
import { styles } from '../theme/styles';

import { theme } from '@/theme/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyles styles={styles} />
            <Sidebar>
              <Component {...pageProps} />
            </Sidebar>
          </ThemeProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </AuthProvider>
  );
}
