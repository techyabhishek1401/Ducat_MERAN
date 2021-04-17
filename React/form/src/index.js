//const React =require('react');
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Default,{App,Test} from './App'
import ABC from './App'
import 'bootstrap/dist/css/bootstrap.min.css';


import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode>
    <Default />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
