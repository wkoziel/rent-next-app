import type { AppProps } from 'next/app';
import { GlobalStyles } from '@mui/material';
import { styles } from '@/theme/styles';
import Sidebar from '@/components/Sidebar/Siderbar';
import { QueryClientProvider, QueryClient } from 'react-query';
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n';

export default function MyApp({ Component, pageProps }: AppProps) {
   const queryClient = new QueryClient();
   return (
      <>
         <I18nextProvider i18n={i18n}>
            <QueryClientProvider client={queryClient}>
               <GlobalStyles styles={styles} />
               <Sidebar>
                  <Component {...pageProps} />
               </Sidebar>
            </QueryClientProvider>
         </I18nextProvider>
      </>
   );
}
