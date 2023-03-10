import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Image.css';
import App from './App';
import Image from './Image';
import Price from './Price';
import Weblogo from './Weblogo';
import Page from './Page';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Page/>
    <Weblogo/>
    
    <Image />
    <Price/>
    <App />
    
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
