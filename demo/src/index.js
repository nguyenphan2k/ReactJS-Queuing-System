import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
// import Login from './user/Login';
// import Forget from './user/Forget'
// import Error from './user/Error';
// import ConfirmPass from './user/ConfirmPass';
import Account from './user/Account';
// import Day from './dashboard/Day'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    {/* <Login /> */}
    {/* <Forget /> */}
    {/* <Error /> */}
    {/* <ConfirmPass /> */}
    <Account />
    {/* <Day /> */}
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
