import { HiArrowUp, HiArrowDown } from "react-icons/hi";
import { useTransactionState } from "../context/TransactionContext";
import styles from "../styles/Summary.module.scss";

export default function Summary() {
  const Data = useTransactionState();
  console.log(Data);
  return (
    <section className={styles.summary}>
      <div className={styles.balance}>
        <h3>Your Balance</h3>
        <h2>${Data && Data.totalBalance}</h2>
      </div>
      <div className={styles.transactionSummary}>
        <div className={styles.income}>
          <div className={styles.icon}>
            <HiArrowUp size="19" />
          </div>
          <div>
            <h4>Income</h4>
            <h3>${Data && Data.totalIncome}</h3>
          </div>
        </div>
        <div className={styles.expense}>
          <div className={styles.icon}>
            <HiArrowDown size="19" />
          </div>
          <div>
            <h4>Expense</h4>
            <h3>${Data && Data.totalExpense}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
