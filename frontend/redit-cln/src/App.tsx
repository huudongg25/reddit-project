import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import MainLayout from './layout/MainLayout';
import store from './redux/store';


function App() {
  return (
   <Provider store={store}>
      <div className="App">
        <MainLayout/>
      </div>
   </Provider>
  );
}

export default App;
