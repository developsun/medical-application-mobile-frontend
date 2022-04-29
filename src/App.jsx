import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {Login} from './components/Pages/Login';
import {Register} from './components/Pages/Register';
import {Page404} from './components/Pages/Page404';
import {Page500} from './components/Pages/Page500';
import {ResetPassword} from './components/Pages/ResetPassword';
import {Onboarding} from './components/Pages/Onboarding'

import {Dashboard} from './components/Layouts/Dashboard'
import {DetailedView} from './components/Layouts/DetailedView'
import './App.css';

const loading = (
  <>
    Loading ...
  </>
)

function App() {
  return (
    <>
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>

            {/* Pages that don't need authentication */}
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
            <Route exact path="/reset_password" name="Reset Password" render={(props) => <ResetPassword {...props} />} />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route exact path="/onboarding" name="Onboarding" render={(props) => <Onboarding {...props} />} />

            {/* Pages that needs authentication */}
            <Route path="/details" name="Details Page" render={(props) => <DetailedView {...props} />} />
            <Route path="/" name="Dashboard Page" render={(props) => <Dashboard {...props} />} />

          </Switch>
        </React.Suspense>
      </HashRouter>
    </>
  );
}

export default App;
