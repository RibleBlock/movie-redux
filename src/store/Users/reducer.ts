/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '..';

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
    {
      id: 3,
      name: 'Victor',
    },
    {
      id: 4,
      name: 'George',
    },
  ],
} as TypeUsers;

const { actions, reducer } = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    changeUserSelected(state, action: PayloadAction<User>) {
      state.selectedUser = { ...action.payload };
    },
  },
});

export const selectUsers = (state: State) => state.usersState.users;
export const selectUserSelected = (state: State) => state.usersState.selectedUser;
export const { changeUserSelected } = actions;
export default reducer;
