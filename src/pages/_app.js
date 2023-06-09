import "@styles/globals.css";

import Header from "@components/header";

import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      
      <SessionProvider session={session}>
        {!Component.getLayout && <Header />}
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
