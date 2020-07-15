import { all, takeLatest } from 'redux-saga/effects';

import { fetchSymbols } from './symbols/symbols.saga.ts';

export function* watchAll() {
  yield all([takeLatest('SYMBOLS_FETCH_REQUESTED', fetchSymbols)]);
}

export default watchAll;
