/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  id: number;
  name: string;
}
export type TypeUsers = {
  selectedUser: User | null;
  users: User[];
}

const initialState = {
  selectedUser: null,
  users: [
    {
      id: 1,
      name: 'Riquelme',
    },
    {
      id: 2,
      name: 'Pietro',
    },
  ],
} as TypeUsers;

const { actions, reducer } = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    selectUser(state, action: PayloadAction<User>) {
      state.selectedUser = { ...action.payload };
    },
  },
});

export const { selectUser } = actions;
export default reducer;
