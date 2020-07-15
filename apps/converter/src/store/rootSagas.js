import { all, takeLatest } from 'redux-saga/effects';

import { fetchSymbols } from './symbols/symbols.saga.ts';
import { fetchRates } from './rates/rates.saga.ts';

export function* watchAll() {
  yield all([
    takeLatest('SYMBOLS_FETCH_REQUESTED', fetchSymbols),
    takeLatest('RATES_FETCH_REQUESTED', fetchRates),
  ]);
}

export default watchAll;
