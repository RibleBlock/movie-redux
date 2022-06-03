import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { Home, Sobre } from './pages';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Switch>
    </Router>
  );
}
