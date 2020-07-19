import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { environment } from '../../environments/environment';

const fetchSymbolsRequest = () => {
  return axios.get(
    `${environment.fixerApiUrl}/symbols?access_key=${environment.fixerAccessKey}`
  );
};

// worker saga : will be fired on SYMBOLS_FETCH_REQUESTED
export function* fetchSymbols() {
  try {
    const symbols = yield call(fetchSymbolsRequest);
    yield put({ type: 'SYMBOLS_FETCH_SUCCEEDED', payload: symbols });
  } catch (e) {
    yield put({ type: 'SYMBOLS_FETCH_FAILED' });
  }
}
