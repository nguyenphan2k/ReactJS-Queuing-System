import './UpdateService.css'
import React from 'react'
import picture from '../images/Alta.png'
import {MdDashboard} from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {BiLayer} from 'react-icons/bi'
import {AiOutlineSetting} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import rings from '../images/Vector.png'
import users from '../images/user.png'
import arrows from '../images/Vector (12).png'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
function UpdateService() {
     const [number, setNumber] = useState("")
     const [up, setUp] = useState(1)

     useEffect(()=>{
          setNumber(Math.floor(Math.random() * 9999))
     }, [])
     useEffect(()=>{
          setInterval(()=>{
               setUp(pre => pre)
          },1000)
     }, [])
  return (
          <section>
               <div className='dashUs'>
                    <div className='dashUs__form'>
                         <div className='dashUs__formImage'>
                              <img src={picture}/>
                         </div>
                         <div className='dashUs__formIcon'>
                              <ul>
                                   <li>
                                        <span><MdDashboard/></span>
                                        <p>Dashboard</p>
                                   </li>
                                   <li>
                                        <div>
                                             <Link to={'/thiet-bi'}>
                                                  <span><FiMonitor/></span>
                                                  <p>Thiết bị</p>
                                             </Link>
                                        </div>
                                   </li>
                                   <li>
                                        <div>
                                             <Link to={'/dich-vu'}>
                                                  <span><FiMonitor/></span>
                                                  <p>Dịch vụ</p>
                                             </Link>
                                        </div>
                                   </li>
                                   <li>
                                        <div>
                                             <Link to={'/cap-so'}>
                                                  <span><BiLayer/></span>
                                                  <p>Cấp số</p>
                                             </Link>
                                        </div>
                                   </li>
                                   <li>
                                        <span><HiOutlineDocumentReport/></span>
                                        <p>Báo cáo</p>
                                   </li>
                                   <li>
                                        <span><AiOutlineSetting/></span>
                                        <p>Cài đặt hệ thống</p>
                                   </li>
                              </ul>
                         </div>
                         <div className='dashUs__formLogout'>
                              <ul>
                                   <li>
                                        <span><FiLogOut/></span>
                                        <p>Đăng xuất</p>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
{/*-------------------------------------------------------------------*/}
               <div className='bodyUs'>
                    <div className='bodyUs__header'>
                         <div className='bodyUs__headerInfo'>
                              <h1>Dịch vụ</h1>
                              <ul>
                                   <li><img src={arrows}/></li>
                                   <li><img src={arrows}/></li>
                                   <li><img src={arrows}/></li>
                              </ul>
                              <h2>Danh sách dịch vụ</h2>
                              <h3>Chi tiết</h3>
                              <h4>Cập nhật</h4>
                         </div>
                         <div className='bodyUs__headerInfo__right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyUs__headerInfo__rightTwo'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='bodyUs__headerInfo__title'>
                              <h1>Quản lý dịch vụ</h1>
                         </div>
                    </div>
{/*----------------------------------------------------*/}
                    <div className='bodyUs__table'>
                         <div className='bodyUs__tableForm'>
                              <div className='bodyUs__tableForm__title'>
                                   <h1>Thông tin dịch vụ</h1>
                              </div>
                              <div className='bodyUs__tableForm__content'>
                                   <ul>
                                        <li>
                                             <h2>*</h2>
                                             <h1>Mã dịch vụ:</h1>
                                             <input type='text' placeholder='201'/>
                                        </li>
                                        <li>
                                             <h2>*</h2>
                                             <h1>Tên dịch vụ:</h1>
                                             <input type='text' placeholder='Khám tim mạch'/>
                                        </li>
                                        <li>
                                             <h1>Mô tả:</h1>
                                             <input type='text' placeholder='Mô tả dịch vụ'/>
                                        </li>
                                   </ul>
                              </div>
                              <div className='bodyUs__tableForm__role'>
                                   <h1>Quy tắc cấp số</h1>
                              </div>
                              <div className='bodyUs__tableForm__checkbox'>
                                   <input type='checkbox'/>      
                                   <h1>Tăng tự động từ:</h1>
                              </div>
                              <div className='bodyUs__tableForm__checkboxTwo'>
                                   <input type='checkbox'/>      
                                   <h1>Prefix:</h1>
                              </div>
                              <div className='bodyUs__tableForm__checkboxThree'>
                                   <input type='checkbox'/>      
                                   <h1>Surfix:</h1>
                              </div>
                              <div className='bodyUs__tableForm__checkboxFour'>
                                   <input type='checkbox'/>      
                                   <h1>Resert mỗi ngày</h1>
                              </div>
                              <div className='bodyUs__tableForm__checkboxFive'>      
                                   <h1>{up}</h1>
                                   <h2>{number}</h2>
                                   <h3>{number}</h3>
                              </div>
                              <div className='bodyUs__tableForm__checkboxSix'>      
                                   <p>đến</p>
                                   <h1>9999</h1>
                              </div>
                              <div className='bodyUs__tableForm__checkboxSeven'>
                                   <h1>*</h1>      
                                   <p>Là trường thông tin bắt buộc</p>
                              </div>
                         </div>
                    </div> 
                    <div className='bodyUs__button'>
                         <div className='bodyUs__buttonCancel'>
                              <Link to={'/tu-choi-dich-vu'} className='bodyUs__buttonCancel__one'>
                                   <button>Huỷ bỏ</button>
                              </Link>
                              <Link to={'/chap-nhan-dich-vu'} className='bodyUs__buttonCancel__two'>
                                   <button>Thêm thiết bị</button>
                              </Link>
                         </div>
                    </div>
               </div>
          </section>
  )
}

export default UpdateService