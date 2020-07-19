import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { environment } from '../../environments/environment';

const fetchRatesRequest = () => {
  return axios.get(
    // todo fix this wepack dotenv issue
    // `${process.env.API_URL}/latest?access_key=${process.env.FIXER_API_ACCESS_KEY}`
    `${environment.fixerApiUrl}/latest?access_key=${
      environment.fixerApiUrl
    }&timestamp=${Date.now().toString()}`
  );
};

// worker saga : will be fired on SYMBOLS_FETCH_REQUESTED
export function* fetchRates(action) {
  try {
    const symbols = yield call(fetchRatesRequest);
    yield put({ type: 'RATES_FETCH_SUCCEEDED', payload: symbols });
  } catch (e) {
    yield put({ type: 'RATES_FETCH_FAILED' });
  }
}
