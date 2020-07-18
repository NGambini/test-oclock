export interface IRates {
  [currency: string]: number;
}

export interface IRatesState {
  date: string;
  base: string; // todo do i need to store this ?
  rates: IRates;
}

export const initialState: IRatesState = {
  date: null,
  base: null,
  rates: {},
};
