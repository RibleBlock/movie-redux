import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook } from 'react-redux';

import listReducer, { TypeList } from './ListaAleatoria/redocer';
import usersReducer, { TypeUsers } from './Users/reducer';

// interface AppState {
//   list: TypeList;
//   users: TypeUsers;
// }

// const reducer = combineReducers<AppState>({
//   list: listReducer,
//   users: usersReducer,
// });

const reducer = {
  listReducer,
  usersReducer,
};

const store = configureStore({
  reducer,
});

export default store;
