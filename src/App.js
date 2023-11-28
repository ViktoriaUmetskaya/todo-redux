import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Content from './Content/Content';
import store from './Redux/Store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <Content/>
        </header>
      </Provider>
    </div>
  );
}

export default App;