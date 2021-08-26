import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
// Required for side-effects
require("firebase/firestore");
require('firebaseui');
var firebaseConfig = {
  apiKey: "AIzaSyBbweCucSisdQUGh50skRIKzd718P8FXXk",
  authDomain: "myreactproject-4e4c4.firebaseapp.com",
  projectId: "myreactproject-4e4c4",
  storageBucket: "myreactproject-4e4c4.appspot.com",
  messagingSenderId: "1032744008744",
  appId: "1:1032744008744:web:e434d766272fb04aae091d",
  measurementId: "G-8LGZCHMK2Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
