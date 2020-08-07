import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Test from './components/Test'

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome <code>User</code>
          </p>
          <a
            className="App-link mb-5"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This is your website base
          </a>
          <Test />
        </header>
      </div>
    </Provider>
  );
}

export default App;
