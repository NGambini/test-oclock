import { symbolsReducer } from '../symbols.reducer';
import { ISymbolsState, initialState } from '../symbols.state';
import { SymbolsFetchSuceedAction, SymbolActionKeys } from '../symbols.actions';

describe('Symbols Reducer', () => {
  it('Correctly pushs symbols', () => {
    const suceedAction: SymbolsFetchSuceedAction = {
      type: SymbolActionKeys.SYMBOLS_FETCH_SUCCEEDED,
      payload: {
        data: {
          success: true,
          symbols: {
            AED: 'United Arab Emirates Dirham',
            AFN: 'Afghan Afghani',
            ALL: 'Albanian Lek',
          },
        },
      },
    };

    expect(
      Object.keys(symbolsReducer(initialState, suceedAction)).length
    ).toEqual(Object.keys(suceedAction.payload.data.symbols).length);
  });
});
