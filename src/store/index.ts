import { configureStore, combineReducers } from '@reduxjs/toolkit';

import listReducer, { TypeList } from './ListaAleatoria/reducer';
import usersReducer, { TypeUsers } from './Users/reducer';
/*
interface AppState {
  list: TypeList;
  users: TypeUsers;
}

const reducer = combineReducers<AppState>({
  list: listReducer,
  users: usersReducer,
});
*/
const reducer = combineReducers({
  listReducer,
  usersReducer,
});

const store = configureStore({ reducer });

export default store;
