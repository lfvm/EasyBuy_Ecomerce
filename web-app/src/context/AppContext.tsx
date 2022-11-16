import React, { useState } from "react";
import { CartPoduct } from "../types/product";

export type AppContextType = {
  cart: CartPoduct[];
  setCart: Function;
};

// Create context
export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType
);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartPoduct[]>([]);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Use app hook
export const useAppContext = () => {
  return React.useContext(AppContext);
};
