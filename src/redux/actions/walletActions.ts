export const FUND_WALLET = "FUND_WALLET";
export const FUND_WALLET_SUCCESS = "FUND_WALLET_SUCCESS";
export const FUND_WALLET_FAILURE = "FUND_WALLET_FAILURE";

export const fundWallet = (amount: number) => ({
  type: FUND_WALLET,
  payload: amount,
});

export const fundWalletSuccess = () => ({
  type: FUND_WALLET_SUCCESS,
});

export const fundWalletFailure = () => ({
  type: FUND_WALLET_FAILURE,
});
