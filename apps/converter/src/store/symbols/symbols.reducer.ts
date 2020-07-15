import { ISymbolsState, initialState } from './symbols.state';

export const symbolsReducer = (
  state: ISymbolsState = initialState,
  action: any
): ISymbolsState => {
  switch (action.type) {
    case 'SYMBOLS_FETCH_SUCCEEDED': {
      // todo move to enum later
      return {
        currencies: action.payload.data.symbols, //todo type me
      };
    }
    default:
      return state;
  }
};
