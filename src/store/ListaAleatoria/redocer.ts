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
  ],
} as TypeList;

const { actions, reducer } = createSlice({
  name: 'ADICIONAR_ITEM',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state.list.push(action.payload);
    },
  },
});
export const selectList = (state: TypeList) => state.list;
export const { addItem } = actions;
export default reducer;
