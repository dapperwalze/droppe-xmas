import * as actions from "../actions/walletActions";

interface walletState {
  walletBalance: number;
  hasErrors: boolean;
  isTransactionSuccessful: boolean;
}

const initialState: walletState = {
  walletBalance: 0,
  hasErrors: false,
  isTransactionSuccessful: false,
};

export type Action = {
  type: string;
  payload?: any;
};

const walletReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.FUND_WALLET:
    case actions.FUND_WALLET_SUCCESS:
      return Object.assign({}, state, {
        walletBalance: state.walletBalance + action.payload,
        hasErrors: false,
        isTransactionSuccessful: true,
      });
    case actions.FUND_WALLET_FAILURE:
      return Object.assign({}, state, {
        hasErrors: true,
        isTransactionSuccessful: false,
      });
    default:
      return state;
  }
};
export const walletSelector = (state: { wallet: any }) => state.wallet;

export default walletReducer;
