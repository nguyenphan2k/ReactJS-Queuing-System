import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import App from './App';
import Device from './user/Device';
import Error from './user/Error';
import ConfirmPass from './user/ConfirmPass';
import Forget from './user/Forget'
import Day from './user/Day'
import AddDevice from './user/AddDevice'
import DevicePart from './user/DevicePart';
import Login from './user/Login';
import UpdateDevice from './user/UpdateDevice';
import Service from './user/Service';
import AddService from './user/AddService';
import DetailService from './user/DetailService';
import UpdateService from './user/UpdateService';
import Level from './user/Level';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<App/>}/> 
            <Route path='/man-hinh-chinh' element={<Day/>}/> 
            <Route path='/thiet-bi' element={<Device/>}/>
            <Route path='/sai-tai-khoan' element={<Forget/>}/>
            <Route path='/quen-mat-khau' element={<Error/>}/>
            <Route path='/tiep-tuc' element={<ConfirmPass/>}/>
            <Route path='/dash-board' element={<Day/>}/> 
            <Route path='/them-thiet-bi' element={<AddDevice/>} />
            <Route path='/quay-lai-thiet-bi' element={<Device/>}/>
            <Route path='/chi-tiet-thiet-bi' element={<DevicePart/>}/>
            <Route path='/man-hinh' element={<Login/>}/>
            <Route path='/cap-nhat-tiep' element={<Device/>}/>
            <Route path='/huy-bo' element={<Device/>}/>
            <Route path='/nang-cap-thiet-bi' element={<UpdateDevice/>}/>
            <Route path='/dich-vu' element={<Service/>}/>
            <Route path='/them-dich-vu' element={<AddService/>}/>
            <Route path='/quay-lai-dich-vu' element={<Service/>}/>
            <Route path='/huy-bo-dich-vu' element={<Service/>}/>
            <Route path='/chi-tiet-dich-vu' element={<DetailService/>}/>
            <Route path='/cap-nhat-dich-vu' element={<UpdateService/>}/>
            <Route path='/len-cap-thiet-bi' element={<UpdateDevice/>}/>
            <Route path='/tu-choi-dich-vu' element={<Service/>}/>
            <Route path='/chap-nhan-dich-vu' element={<Service/>}/>
            <Route path='/cap-so' element={<Level/>}/>
         </Routes> 
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
