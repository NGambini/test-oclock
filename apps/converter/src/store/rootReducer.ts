import { symbolsReducer as symbols } from './symbols/symbols.reducer';
import { ratesReducer as rates } from './rates/rates.reducer';
import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { IReduxState } from './root.state';

export const reducers: ReducersMapObject<IReduxState, any> = {
  symbols,
  rates,
};
export const rootReducer = combineReducers(reducers);
