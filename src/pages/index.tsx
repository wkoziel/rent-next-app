import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function IndexPage() {
   const { push } = useRouter();

   useEffect(() => {
      push('/login');
   }, [push]);

   return <div />;
}
