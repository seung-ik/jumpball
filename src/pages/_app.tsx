import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@store/index';
import RootLayout from '@layout/RootLayout';
import GlobalStyle from '@styles/GlobalStyle';
import dynamic from 'next/dynamic';
const UserStatus = dynamic(() => import('../components/UserStatus'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserStatus />
      <RootLayout>
        <GlobalStyle />
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
