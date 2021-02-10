import React from "react";
import Button from 'react-bootstrap/Button'
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login/login';
import Register from './components/register/register1';
import Password from './components/forgotPwd/password';
import reset from './components/reset/reset'


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/password' component={Password} />
            <Route path='/resetpassword/:token' component={reset} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
