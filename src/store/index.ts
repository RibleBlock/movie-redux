import { configureStore, combineReducers } from '@reduxjs/toolkit';

import listReducer, { TypeList } from './ListaAleatoria/reducer';
import usersReducer, { TypeUsers } from './Users/reducer';

export interface State {
  list: TypeList;
  users: TypeUsers;
}

const reducer = combineReducers<State>({
  list: listReducer,
  users: usersReducer,
});

const store = configureStore({ reducer });

export default store;
