import type { AppProps } from 'next/app';
import { GlobalStyles } from '@mui/material';
import { styles } from '@/theme/styles';

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <GlobalStyles styles={styles} />
         <Component {...pageProps} />;
      </>
   );
}
