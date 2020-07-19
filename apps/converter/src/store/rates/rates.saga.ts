import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { environment } from '../../environments/environment';

const fetchRatesRequest = () => {
  return axios.get(
    `${environment.fixerApiUrl}/latest?access_key=${environment.fixerAccessKey}`
  );
};

// worker saga : will be fired on SYMBOLS_FETCH_REQUESTED
export function* fetchRates() {
  try {
    const symbols = yield call(fetchRatesRequest);
    yield put({ type: 'RATES_FETCH_SUCCEEDED', payload: symbols });
  } catch (e) {
    yield put({ type: 'RATES_FETCH_FAILED' });
  }
}
