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
    const { climaticCondition } = useContext(GlobalContext);

    const backgrounds = {
      rainy: `linear-gradient(180deg, rgba(97,105,120,1) 0%, rgba(65,72,88,1) 100%);`,
      snowy:
        "linear-gradient(180deg, rgba(224,224,224,1) 0%, rgba(172,172,172,1) 100%);",
      sunny: `linear-gradient(180deg,rgba(86, 203, 219, 1) 0%,rgba(58, 158, 178, 1) 100%)`,
    };
    type bg = keyof typeof backgrounds;

    return Component.getLayout ? (
      Component.getLayout(
        <ThemeProvider
          theme={theme(
            climaticCondition.toLowerCase() === "snowy" ? "#1F1F1F" : "#fff",
            backgrounds[climaticCondition.toLowerCase() as bg]
          )}
        >
          <GlobalStyle />

          <Component {...pageProps} />
        </ThemeProvider>
      )
    ) : (
      <ThemeProvider
        theme={theme(
          climaticCondition.toLowerCase() === "snowy" ? "#1F1F1F" : "#fff",
          backgrounds[climaticCondition.toLowerCase() as bg]
        )}
      >
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  };

  return (
    mounted && (
      <GlobalContextProvider>
        <ThemeWrapper />
      </GlobalContextProvider>
    )
  );
};

export default App;
