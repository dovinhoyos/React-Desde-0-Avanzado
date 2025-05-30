import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextType {
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const EmptyGlobalState: number = 0;

const GlobalContext = createContext<GlobalContextType>({
  value: null,
  setValue: () => {},
});

interface Props {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: Props) => {
  const [value, setValue] = useState<number>(EmptyGlobalState);

  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context.value && context.value !== 0) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};
