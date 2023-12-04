import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import GlobalStyle from "@/styles/GlobalStyles";
import theme from "@/styles/Theme";
import { GlobalContext, GlobalContextProvider } from "@/contexts/GlobalContext";
import React, {
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { NextPage } from "next";
import "@/styles/fonts.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const ThemeWrapper = () => {
    const { climaticCod } = useContext(GlobalContext);

    console.log(climaticCod);

    return Component.getLayout ? (
      Component.getLayout(
        <ThemeProvider theme={theme(climaticCod)}>
          <GlobalStyle />

          <Component {...pageProps} />
        </ThemeProvider>
      )
    ) : (
      <ThemeProvider theme={theme(climaticCod)}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  };

  return (
    mounted && (
      <GlobalContextProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <ThemeWrapper />
      </GlobalContextProvider>
    )
  );
};

export default App;
