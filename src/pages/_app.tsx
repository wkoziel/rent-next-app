import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles } from '@mui/material';
import type { AppProps } from 'next/app';

import i18n from '../lib/i18n';

import Sidebar from '@/components/Sidebar/Siderbar';
import { AuthProvider } from '@/contexts/AuthContext';
import { styles } from '@/theme/styles';

export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <AuthProvider>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <GlobalStyles styles={styles} />
            <Sidebar>
              <Component {...pageProps} />
            </Sidebar>
          </QueryClientProvider>
        </I18nextProvider>
      </AuthProvider>
    </>
  );
}
