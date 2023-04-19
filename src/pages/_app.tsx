import RootLayout from '@layout/RootLayout';
import GlobalStyle from '@styles/GlobalStyle';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </RootLayout>
  );
}
