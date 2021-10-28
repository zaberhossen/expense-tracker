import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import TransactionForm from "../components/TransactionForm";
import styles from "../styles/Home.module.scss";
import Theme from "../components/Theme";
import History from "../components/History";
import { TransactionContextWrapper } from "../context/TransactionContext";
import { IHistoryList } from "../type";
import Summary from "../components/Summary";

const Home: NextPage = () => {
  const [transactionList, setTransactionList] = useState<IHistoryList[]>([]);
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const data = {
    transactionList: transactionList,
    totalBalance,
    totalIncome,
    totalExpense,
  };

  const CreateTransaction = (title: string, amount: number) => {
    if (totalBalance + amount < 0) {
      alert("Insufficient balance");
    } else {
      setTotalBalance(totalBalance + amount);
      if (amount < 0) {
        setTotalExpense(totalExpense + Math.abs(amount));
      } else {
        setTotalIncome(totalIncome + amount);
      }
      setTransactionList([
        ...transactionList,
        {
          id: new Date().toISOString(),
          title: title,
          amount: Number(amount),
        },
      ]);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Expense Tracker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Expense Tracker</h1>
          <div>
            <Theme />
          </div>
        </div>
        <TransactionContextWrapper data={data}>
          <Summary />
          <section>
            <h2 className={styles.sectionTitle}>History</h2>
            <History />
          </section>
        </TransactionContextWrapper>

        <section>
          <h2 className={styles.sectionTitle}>Add new transaction</h2>
          <TransactionForm handleTransaction={CreateTransaction} />
        </section>
      </main>
    </div>
  );
};

export default Home;
