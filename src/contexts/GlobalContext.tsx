import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface GlobalContextData {
  setSizeScreen: Dispatch<SetStateAction<{ width: number; height: number }>>;
  sizeScreen: { width: number; height: number };
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  setClimaticCondition: Dispatch<SetStateAction<string>>;
  climaticCondition: string;
}

interface GlobalProps {
  children: ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextData);

export const GlobalContextProvider = ({ children }: GlobalProps) => {
  const [sizeScreen, setSizeScreen] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window === "object" ? window.innerWidth : 0,
    height: typeof window === "object" ? window.innerHeight : 0,
  });

  const [darkMode, setDarkMode] = useState<boolean>(false);

  const [climaticCondition, setClimaticCondition] = useState<string>("");

  useEffect(() => {
    if (typeof window === "object") {
      window.addEventListener("resize", () =>
        setSizeScreen({ width: window.innerWidth, height: window.innerHeight })
      );

      return () => {
        window.removeEventListener("resize", () =>
          setSizeScreen({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        );
      };
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        setClimaticCondition,
        climaticCondition,
        setSizeScreen,
        sizeScreen,
        setDarkMode,
        darkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
