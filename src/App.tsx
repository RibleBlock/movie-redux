/* eslint-disable react/jsx-one-expression-per-line */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from './assets/styles/GlobalStyles';
import { Routes } from './Routes';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}> {/* normal */}
      <PersistGate loading={null} persistor={persistor}> {/* Com o persist */}
        <GlobalStyles />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
