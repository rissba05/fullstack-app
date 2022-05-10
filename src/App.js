import React from 'react';
import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
      </header>
    </div>
  );
};

export default withAuthenticator(App, { includeGreetings: true });