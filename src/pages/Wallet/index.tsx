import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FundWalletForm from "../../components/Forms/FundWalletForm";
import { fundWallet } from "../../redux/actions/walletActions";
import { walletSelector } from "../../redux/reducers/walletReducer";
import { handleCurrencyFormatting } from "./../../utils/helpers";
import styles from "./wallet.module.scss";

interface Event {
  target: Record<string, any>;
  preventDefault: () => void;
}

const Wallet = () => {
  const { walletBalance, hasErrors, isTransactionSuccessful } =
    useSelector(walletSelector);

  const [formState, setFormState] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    amount: "",
  });

  const { amount } = formState;

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (evt: Event) => {
      evt.preventDefault();
      dispatch(fundWallet(+amount));
      setFormState({
        ...formState,
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        amount: "",
      });
    },
    [formState, dispatch, amount]
  );

  const handleChange = useCallback(
    (evt: Event) => {
      const name = evt.target.name;
      const value = evt.target.value;
      setFormState({ ...formState, [name]: value });
    },
    [formState]
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Wallet</h2>
        <span className={styles.walletBalanceBlock}>
          Available Balance:
          <span className={styles.walletBalance}>
            {handleCurrencyFormatting(walletBalance)}
          </span>
        </span>
      </header>
      {isTransactionSuccessful && (
        <span className={styles.transactionSuccess}>
          Transaction was successful!
        </span>
      )}
      {hasErrors && (
        <span className={styles.transactionFailure}>
          Transaction failed, please try again.
        </span>
      )}

      <FundWalletForm
        {...formState}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Wallet;
