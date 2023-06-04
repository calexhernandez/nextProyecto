//import { ProviderAuth } from '@hooks/useAuth';
import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css';
import { SessionProvider } from 'next-auth/react';
import { ProviderAuth } from '@hooks/useAuth';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      {/* <AuthProvider session={pageProps.session}> */}

      <MainLayout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MainLayout>

      {/* </AuthProvider> */}
    </>
  );
}

export default MyApp;
