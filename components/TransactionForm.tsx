import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import styles from "../styles/TransactionForm.module.scss";

export default function TransactionForm({
  handleTransaction,
}: {
  handleTransaction: (title: string, amount: number) => void;
}) {
  return (
    <div className={styles.transaction}>
      <Formik
        initialValues={{ title: "", amount: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.title) {
            errors.title = "Required";
          }
          if (!values.amount && Number(values.amount) == 0) {
            errors.amount = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleTransaction(values.title, Number(values.amount));
        }}
      >
        {(formikBag) => (
          <Form>
            <div className={styles.formInput}>
              <label htmlFor="title">Text</label>
              <Field
                id="title"
                type="text"
                name="title"
                className={styles.input}
                placeholder="Transaction title"
              />
              <ErrorMessage
                name="title"
                component="p"
                className={styles.errorMsg}
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="amount">
                Amount <span>(negative - expense, positive - income)</span>
              </label>
              <Field
                id="amount"
                type="number"
                name="amount"
                className={styles.input}
                placeholder="Amount"
              />
              <ErrorMessage
                name="amount"
                component="p"
                className={styles.errorMsg}
              />
            </div>
            <button className={styles.button} type="submit">
              Add transaction
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
