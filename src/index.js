import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// THE QUICK BROWN FOX JUMPED OVER THE LAZY SHEEP DOG

ReactDOM.render(
  // THE QUICK BROWN FOX JUMPED OVER THE LAZY SHEEP DOG
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // THE QUICK BROWN FOX JUMPED OVER THE LAZY SHEEP DOG
  document.getElementById('root'),
  func1()
);

function func1(){
  console.log("test")
}

// THE QUICK BROWN FOX JUMPED OVER THE LAZY SHEEP DOG


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
