import { configureStore, combineReducers } from '@reduxjs/toolkit';

import listState, { TypeList } from './ListaAleatoria/reducer';
import usersState, { TypeUsers } from './Users/reducer';

export interface State {
  listState: TypeList;
  usersState: TypeUsers;
}

const reducer = combineReducers({
  listState,
  usersState,
});

const store = configureStore({ reducer });

export default store;
