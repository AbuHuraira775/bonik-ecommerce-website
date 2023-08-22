import './App.css';
import {
  BrowserRouter as Router,
  Route,
  // RouterProvider,
} from "react-router-dom";

import { Switch } from 'react-router-dom/';
import Header from './common/header/Header';
import Pages from './pages/Pages';

function App() {
  return (
    <div >
      <Router>
        <Header />
        <Switch>
            <Route path="/" exact>
              <Pages />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
