import React from "react";
import styles from "./fundwallet.module.scss";

interface FundWalletFormProps {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  amount: string;
  handleSubmit: (arg: any) => void;
  handleChange: (arg: any) => void;
}

const FundWalletForm = (props: FundWalletFormProps) => {
  const { handleChange, handleSubmit, cardNumber, expiryDate, cvv, amount } =
    props;

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber" className={styles.label}>
          Card Number
        </label>
        <div className={styles.formRow}>
          <input
            className={styles.formInput}
            type="number"
            min={0}
            required
            name="cardNumber"
            value={cardNumber}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formRow}>
          <div className={styles.formRowBlock}>
            <label htmlFor="expiry-date" className={styles.label}>
              Expiry
            </label>
            <input
              className={styles.smallInput}
              type="number"
              min={0}
              required
              name="expiryDate"
              value={expiryDate}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formRowBlock}>
            <label htmlFor="cvv" className={styles.label}>
              CVV
            </label>
            <input
              className={styles.smallInput}
              type="number"
              min={0}
              required
              name="cvv"
              value={cvv}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div>
            <label htmlFor="amount" className={styles.label}>
              Amount
            </label>
            <input
              className={styles.smallInput}
              type="number"
              min={0}
              required
              name="amount"
              value={amount}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className={styles.topUpBtn} type="submit">
          Top Up
        </button>
      </form>
    </div>
  );
};
export default FundWalletForm;
