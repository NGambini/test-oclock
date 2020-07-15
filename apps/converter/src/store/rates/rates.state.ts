export interface IRatesState {
  date: string;
  base: string; // todo do i need to store this ?
  rates: {
    [currency: string]: number;
  };
}

export const initialState: IRatesState = {
  date: null,
  base: null,
  rates: {},
};
