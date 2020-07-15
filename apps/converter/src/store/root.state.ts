import { ISymbolsState } from './symbols';
import { IRatesState } from './rates/rates.state';

export interface IReduxState {
  symbols: ISymbolsState;
  rates: IRatesState;
}
