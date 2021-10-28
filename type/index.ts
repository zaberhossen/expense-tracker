export type IHistoryList = {
  amount: number;
  title: string;
  id: string;
};

//  type: "expense" | "income";

export interface IAppState {
  transactionList: IHistoryList[];
  totalBalance: number;
  totalIncome: number;
  totalExpense: number;
}
