import { ISymbolsState, initialState } from './symbols.state';

export const symbolsReducer = (
  state: ISymbolsState = initialState,
  action: any
): ISymbolsState => {
  switch (action.type) {
    default:
      return state;
  }
};
