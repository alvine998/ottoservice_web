import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"}>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
