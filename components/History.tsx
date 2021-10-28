import React from "react";
import { useTransactionState } from "../context/TransactionContext";
import styles from "../styles/History.module.scss";
import { IHistoryList } from "../type";

export default function History() {
  const Data = useTransactionState();
  return (
    <div className={styles.history}>
      {Data && Data.transactionList.length ? (
        <ul>
          {Data.transactionList.map((item: IHistoryList, index: number) => (
            <li
              key={index}
              className={item.amount < 0 ? styles.expense : styles.income}
            >
              <span>{item.title}</span>{" "}
              <span className={styles.amount}>{item.amount}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyMsg}>No history found</p>
      )}
    </div>
  );
}
