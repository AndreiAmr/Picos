import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';
import { GlobalStyles } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
