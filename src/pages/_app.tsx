import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@store/index';
import RootLayout from '@layout/RootLayout';
import GlobalStyle from '@styles/GlobalStyle';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from 'react-query';
const UserStatus = dynamic(() => import('../components/articles/UserStatus'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider contextSharing client={queryClient}>
        <UserStatus />
        <RootLayout>
          <GlobalStyle />
          <Component {...pageProps} />
        </RootLayout>
      </QueryClientProvider>
    </Provider>
  );
}
