import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const fetchSymbolsRequest = () => {
  return axios.get(
    `${process.env.API_URL}/symbols?access_key=${process.env.FIXER_API_ACCESS_KEY}`
  );
};

// worker saga : will be fired on SYMBOLS_FETCH_REQUESTED
export function* fetchSymbols(action) {
  try {
    const symbols = yield call(fetchSymbolsRequest);
    yield put({ type: 'SYMBOLS_FETCH_SUCCEEDED', payload: symbols });
  } catch (e) {
    yield put({ type: 'SYMBOLS_FETCH_FAILED' });
  }
}
