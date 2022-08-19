import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { Home, Users } from './pages';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Users />} />
      </Switch>
    </Router>
  );
}
