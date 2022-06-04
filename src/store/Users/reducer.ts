import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {},
});

export const showUsers = (state: TypeUsers) => state;
// export const {} = actions;
export default reducer;
