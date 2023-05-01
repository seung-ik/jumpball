import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '@store/index';
import RootLayout from '@layout/RootLayout';
import GlobalStyle from '@styles/GlobalStyle';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserStatus = dynamic(() => import('../components/articles/UserStatus'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 300000,
        cacheTime: 300000,
      },
    },
  });

  return (
    <>
      <Head>
        <title>JumpBall | Beta</title>
        <meta name="description" content="seungik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <QueryClientProvider contextSharing client={queryClient}>
          <UserStatus />
          <RootLayout>
            <GlobalStyle />
            <ToastContainer />
            <Component {...pageProps} />
          </RootLayout>
        </QueryClientProvider>
      </Provider>
    </>
  );
}
