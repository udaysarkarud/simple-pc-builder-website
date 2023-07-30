import Header from "@/components/shared/Header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <SessionProvider session={pageProps.session}>
      <Header />
      {<Component {...pageProps} />}
    </SessionProvider>
  );
}
