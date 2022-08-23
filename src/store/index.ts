/* Com apenas esses ja é possivel usar o redux */
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Para armazenar localmente
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import usersState, { TypeUsers } from './Users/reducer';

// Tipagem do combineReducers
export interface State {
  reducer: {
    // listState: TypeList;
    users: TypeUsers;
  }
}

// ?
const persistConfig = {
  key: 'root',
  storage,
};

// Juntando os reducers
const reducersToPersist = combineReducers({
  users: usersState,
});

// ?
const persistedReducer = persistReducer(persistConfig, reducersToPersist);

// UM objeto que vai dentro do cofigureStore
const reducer = {
  reducer: persistedReducer,
  // aqui vai os reducers que nao vao persistir
  // lista: listState,
};

// Redux normal ??
const store = configureStore({
  reducer,
  // sem o middleware pode dar esse erro => A non-serializable value was detected in an action.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
// ????
const persistor = persistStore(store);

export { store, persistor };
