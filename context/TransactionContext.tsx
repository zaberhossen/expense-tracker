import React from "react";
import { IAppState } from "../type";

interface Iprops {
  children: any;
  data: IAppState;
}

const TransactionContext = React.createContext<IAppState | null>(null);

function TransactionContextWrapper({ children, data }: Iprops) {
  return (
    <TransactionContext.Provider value={data}>
      {children}
    </TransactionContext.Provider>
  );
}

function useTransactionState() {
  const context = React.useContext(TransactionContext);
  if (context === undefined) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }
  return context;
}

export { TransactionContextWrapper, useTransactionState };
