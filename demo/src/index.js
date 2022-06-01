import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import App from './App';
import Device from './user/Device';
// import Error from './user/Error';
// import ConfirmPass from './user/ConfirmPass';
// import Account from './user/Account';
// import Forget from './user/Forget';
// import Day from './user/Day';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
      
         <Routes>
           <Route path='/' element={<App/>}/> 
           <Route path='/thiet-bi' element={<Device/>}/>
          {/* <Route path='/sai-tai-khoan' element={<Forget/>}/>
          <Route path='/quen-mat-khau' element={<Error/>}/>
          <Route path='/tiep-tuc' element={<ConfirmPass/>}/>
          <Route path='/dash-board' element={<Day/>}/> 
           <Route path='/tai-khoan' element={<Account/>}/> */}
         </Routes> 
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
