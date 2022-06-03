/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TypeList {
  list: string[];
}

const initialState = {
  list: [
    'Item1',
    'Item2',
    'Item3',
    'Item4',
    'Item5',
    'Item6',
    'Item7',
    'Item8',
    'Item9',
  ],
} as TypeList;

const { actions, reducer } = createSlice({
  name: 'indevido',
  initialState,
  reducers: {
    limpaIndevidamente(state, actions: PayloadAction) {
      state.list = [...state.list, 'Banana'];
    },
  },
});
export const selectList = (state: TypeList) => state.list;
export const { limpaIndevidamente } = actions;
export default reducer;
