import { configureStore, combineReducers } from '@reduxjs/toolkit';

import listReducer from './ListaAleatoria/redocer';
import usersReducer from './Users/reducer';

// const redocer = combineReducers({
//   listReducer,
//   usersReducer,
// });

const store = configureStore({
  reducer: listReducer, // usersReducer
});

export default store;
