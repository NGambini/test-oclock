export interface ISymbolsState {
  currencies: Array<{ symbol: string; name: string }>;
}

export const initialState: ISymbolsState = {
  currencies: [],
};
