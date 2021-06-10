import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components/cart/main.css';
import { ProdProvider } from './components/cart/comp/data/context';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ProdProvider>
      <Router>
        <App />
      </Router>
    </ProdProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
