/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '..';

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

const reducer = createSlice({
  name: 'randomList',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state.list.push(action.payload);
    },
  },
});
export const selectList = (state: State) => state.listState.list;
export const { addItem } = reducer.actions;
export default reducer.reducer;
