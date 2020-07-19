import { IRatesState, initialState } from './rates.state';

import {
  RatesActionKeys,
  RatesActions,
  RatesFetchSuceedAction,
} from './rates.actions';

export const ratesReducer = (
  state: IRatesState = initialState,
  action: RatesActions
): IRatesState => {
  switch (action.type) {
    case RatesActionKeys.RATES_FETCH_SUCCEEDED: {
      return {
        ...state,
        rates: action.payload.data.rates,
      };
    }
    default:
      return { ...state };
  }
};
