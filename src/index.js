import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import *as Serviceworker from './Serviceworker';
import './components/styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


