import { symbolsReducer as symbols } from './symbols/symbols.reducer';
import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { IReduxState } from './root.state';

export const reducers: ReducersMapObject<IReduxState, any> = {
  symbols,
};
export const rootReducer = combineReducers(reducers);
