import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
// import Login from './user/Login';
// import Error from './user/Error';
// import ConfirmPass from './user/ConfirmPass';
// import Account from './user/Account';
import Day from './dashboard/Day'
// import {} from 'react-router-dom'
// import App from './App';
// import Forget from './user/Forget';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        {/* <Routes> */}
          {/* <Route path='/' element={<App />}/>
          <Route path='/quen-mat-khau' element={<Error/>}/>
          <Route path='/tiep-tuc' element={<ConfirmPass/>}/> */}
          {/* <Account /> */}
          <Day />
        {/* </Routes> */}
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
