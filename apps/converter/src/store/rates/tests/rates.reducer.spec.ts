import { ratesReducer } from '../rates.reducer';
import { IRatesState, initialState } from '../rates.state';
import { RatesFetchSuceedAction, RatesActionKeys } from '../rates.actions';

describe('Rates Reducer', () => {
  it('Correctly pushs rates', () => {
    const suceedAction: RatesFetchSuceedAction = {
      type: RatesActionKeys.RATES_FETCH_SUCCEEDED,
      payload: {
        data: {
          success: true,
          rates: {
            AED: 4.198103,
            AFN: 88.179055,
            ALL: 124.387711,
          },
        },
      },
    };

    console.log(ratesReducer(initialState, suceedAction));

    expect(
      Object.keys(ratesReducer(initialState, suceedAction).rates).length
    ).toEqual(Object.keys(suceedAction.payload.data.rates).length);
  });
});
