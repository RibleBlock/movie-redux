import { configureStore, combineReducers } from '@reduxjs/toolkit';

import listReducer from './ListaAleatoria/redocer';
import usersReducer from './Users/reducer';

const reducer = {
  listReducer,
  usersReducer,
};

const store = configureStore({ reducer });

export default store;
