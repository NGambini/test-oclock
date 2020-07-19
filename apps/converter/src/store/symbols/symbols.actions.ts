import { ISymbolsState } from './symbols.state';

export enum SymbolActionKeys {
  SYMBOLS_FETCH_REQUESTED = 'SYMBOLS_FETCH_REQUESTED',
  SYMBOLS_FETCH_SUCCEEDED = 'SYMBOLS_FETCH_SUCCEEDED',
  SYMBOLS_FETCH_FAILED = 'SYMBOLS_FETCH_FAILED',
}

export type SymbolsFetchSuceedAction = {
  readonly type: SymbolActionKeys.SYMBOLS_FETCH_SUCCEEDED;
  readonly payload: {
    data: {
      success: boolean;
      symbols: ISymbolsState;
    };
  };
};

export type SymbolsActions = SymbolsFetchSuceedAction; // other actions could be added as union type
