import React, { createContext, useState, ReactNode } from "react";

interface MyContextType {
  togle: boolean;
}

export const MyContext = createContext<MyContextType>({
  togle: false,
});

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider = ({ children }: MyProviderProps) => {
  const [togle, setTogle] = useState(false);

  return <MyContext.Provider value={{ togle }}>{children}</MyContext.Provider>;
};
