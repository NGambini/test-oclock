import { IRatesState, initialState } from './rates.state';

export const ratesReducer = (
  state: IRatesState = initialState,
  action: any
): IRatesState => {
  console.log('state in ratesReducer : ', state);

  switch (action.type) {
    case 'RATES_FETCH_SUCCEEDED': {
      // todo move to enum later
      return {
        ...state,
        date: action.payload.data.date,
        base: action.payload.data.base,
        rates: action.payload.data.rates, //todo type me
      };
    }
    default:
      return { ...state };
  }
};
