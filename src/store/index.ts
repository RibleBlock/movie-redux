import { configureStore, combineReducers } from '@reduxjs/toolkit';

import reducer from './ListaAleatoria/redocer';

// const reducersToPersist = combineReducers({
//   list: nomeIndevido,
// });

const store = configureStore({
  reducer,
});

export default store;
