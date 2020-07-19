import { ISymbolsState, initialState } from './symbols.state';
import {
  SymbolActionKeys,
  SymbolsActions,
  SymbolsFetchSuceedAction,
} from './symbols.actions';

export const symbolsReducer = (
  state: ISymbolsState = initialState,
  action: SymbolsActions
): ISymbolsState => {
  switch (action.type) {
    case SymbolActionKeys.SYMBOLS_FETCH_SUCCEEDED: {
      return {
        // we cast the action as the precise type we want
        // (just as an example as we only have one type...)
        ...(action as SymbolsFetchSuceedAction).payload.data.symbols,
      };
    }
    default:
      return { ...state };
  }
};
