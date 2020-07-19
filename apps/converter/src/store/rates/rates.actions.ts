import { IRates } from './rates.state';

export enum RatesActionKeys {
  RATES_FETCH_REQUESTED = 'RATES_FETCH_REQUESTED',
  RATES_FETCH_SUCCEEDED = 'RATES_FETCH_SUCCEEDED',
  RATES_FETCH_FAILED = 'RATES_FETCH_FAILED',
}

export type RatesFetchSuceedAction = {
  readonly type: RatesActionKeys.RATES_FETCH_SUCCEEDED;
  readonly payload: {
    data: {
      success: boolean;
      rates: IRates;
    };
  };
};

export type RatesActions = RatesFetchSuceedAction; // other actions could be added as union type
