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
import Script from 'next/script';
import * as gtag from '../lib/gtag';

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
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7066838750664656"
          crossOrigin="anonymous"
        />
        <meta
          name="google-site-verification"
          content="XG5LaYu-fml4gVOv6AbQTZmzBz7SfH-7Rd-JosB35WM"
        />
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
