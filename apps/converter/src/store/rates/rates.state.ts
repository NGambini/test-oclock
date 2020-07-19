export interface IRates {
  [currency: string]: number;
}

export interface IRatesState {
  rates: IRates;
}

export const initialState: IRatesState = {
  rates: {},
};
