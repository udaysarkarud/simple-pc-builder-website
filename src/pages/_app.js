import Header from "@/components/shared/Header";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Header />
        {<Component {...pageProps} />}
      </Provider>
    </SessionProvider>
  );
}
