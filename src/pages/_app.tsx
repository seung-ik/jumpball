import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '@store/index';
import RootLayout from '@layout/RootLayout';
import GlobalStyle from '@styles/GlobalStyle';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const UserStatus = dynamic(() => import('../components/articles/UserStatus'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 300000,
        cacheTime: 300000,
      },
    },
  });

  useEffect(() => {
    const code = process.env.NEXT_PUBLIC_GA_ID as string; 
    ReactGA.initialize(code); // 추적 ID를 여기에 입력합니다.
    ReactGA.pageview(window.location.pathname + window.location.search);

    // 페이지 이동 시에도 Google Analytics에 페이지를 추적하도록 설정합니다.
    const handleRouteChange = (url: any) => {
      ReactGA.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

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
