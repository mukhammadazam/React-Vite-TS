import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
interface MyContextType {
  togle: boolean;
  setTogle: Dispatch<SetStateAction<boolean>>;
}

export const MyContext = createContext<MyContextType>({
  togle: false,
  setTogle: () => {},
});

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider = ({ children }: MyProviderProps) => {
  const [togle, setTogle] = useState(false);

  return (
    <MyContext.Provider value={{ togle, setTogle }}>
      {children}
    </MyContext.Provider>
  );
};
