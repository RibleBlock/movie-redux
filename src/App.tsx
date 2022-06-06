import { Provider } from 'react-redux';
import GlobalStyles from './assets/styles/GlobalStyles';
import { Routes } from './Routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  );
}

export default App;
