/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Routes
import routes from './routes';

// Context
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
