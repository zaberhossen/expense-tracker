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
          {Data.transactionList.map((item: IHistoryList) => (
            <li
              key={item.id}
              className={item.amount < 0 ? styles.expense : styles.income}
            >
              <span>
                {item.title}{" "}
                <span className={styles.date}>
                  - {new Date(item.id).toLocaleString()}
                </span>
              </span>{" "}
              <span className={styles.amount}>
                {item.amount < 0
                  ? `- $${Math.abs(item.amount)}`
                  : `$${item.amount}`}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyMsg}>No history found</p>
      )}
    </div>
  );
}
