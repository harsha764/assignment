import React, { Fragment } from 'react';
import './App.css';
import './assets/css/bootstrap.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import * as Constants from './helpers/Constants';
import SignupComp from './components/signup';
import LoginComp from './components/login';
import AuthComponent from './components/authcomponent';
import DashboardComp from './components/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                        <Route exact path="/" component={AuthComponent} />
                        <Route exact path="/login" component={LoginComp} />
                        <Route path={Constants.SIGNUP_LINK} component={SignupComp} />
                        <Route path={Constants.DASHBOAD_LINK} component={DashboardComp} />
                  </div>
                </div>
              </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
