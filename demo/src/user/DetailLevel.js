import './DetailLevel.css'
import React from 'react'
import picture from '../images/Alta.png'
import {MdDashboard} from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {BiLayer} from 'react-icons/bi'
import {AiOutlineSetting} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import rings from '../images/Vector.png'
import users from '../images/user.png'
import arrows from '../images/Vector (12).png'
import {RiArrowGoBackFill} from 'react-icons/ri'
import { useState } from 'react'
function DetailLevel() {
     const [infos, setInfos] = useState([
          {
               fullName: 'Nguyễn Thị Dung',
               service: 'Khám tim mạch',
               count: '2001201',
               date: '14:35 - 07/11/2021',
               exportDate: '18:00 - 07/11/2021',
               source: 'Kiosk',
               dot: '.',
               status: 'Đang chờ',
               phone: '0948523623',
               email: 'nguyendung@gmail.com'
          }
     ])
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
                                        <div>
                                             <Link to={'/man-hinh-chinh'}>
                                                  <span><MdDashboard/></span>
                                                  <p>Dashboard</p>
                                             </Link>
                                        </div>
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
                                        <div>
                                             <Link to={'/bao-cao'}>
                                                  <span><HiOutlineDocumentReport/></span>
                                                  <p>Báo cáo</p>
                                             </Link>
                                        </div>
                                   </li>
                                   <li>
                                        <div>
                                             <Link to={'/cai-dat-he-thong'}>
                                                  <span><AiOutlineSetting/></span>
                                                  <p>Cài đặt hệ thống</p>
                                             </Link>
                                        </div>
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
{/*-------------------------------------------------------------*/}
               <div className='bodyDle'>
                    <div className='bodyDle__header'>
                         <div className='bodyDle__headerInfo'>
                              <h1>Thiết bị</h1>
                              <ul>
                                   <li><img src={arrows}/></li>
                                   <li><img src={arrows}/></li>
                              </ul>
                              <h2>Danh sách cấp số</h2>
                              <h3>Chi tiết</h3>
                         </div>
                         <div className='bodyDle__headerInfo__right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyDle__headerInfo__rightTwo'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='bodyDle__headerInfo__title'>
                              <h1>Quản lý cấp số</h1>
                         </div>
                    </div>
                    {/*----------------------------------------*/}
                    <div className='bodyDle__formAdd'>
                              <div className='bodyDle__formAdd__level'>
                                   <Link to={'/quay-lai-cap-so-tiep'} className='bodyDle__formAdd__levelClick'>
                                        <span><RiArrowGoBackFill/></span>
                                        <h1>Quay lại</h1>
                                   </Link>
                              </div>
                         </div>
{/*------------------------------------------------------------*/}
                    <div className='bodyDle__table'>
                         <div className='bodyDle__tableContainer'>
                              <div className='bodyDle__tableContainer__header'>
                                   <h1>Thông tin cấp số</h1>
                              </div>
                              <div className='bodyDle__tableContainer__text'>
                                   <ul>
                                   {
                                        infos.map(info => (
                                            <div>
                                                <li>Họ tên</li>
                                                <li>{info.fullName}</li>
                                                <li>Tên dịch vụ</li>
                                                <li>{info.service}</li>
                                                <li>Số thứ tự</li>
                                                <li>{info.count}</li>
                                                <li>Thời gian cấp</li>
                                                <li>{info.date}</li>
                                                <li>Hạn sử dụng</li>
                                                <li>{info.exportDate}</li>
                                                <li>Nguồn cấp</li>
                                                <li>{info.source}</li>
                                                <li>Trạng thái</li>
                                                <li>
                                                     <span>{info.dot}</span>
                                                     <p>{info.status}</p>
                                                </li>
                                                <li>Số điện thoại</li>
                                                <li>{info.phone}</li>
                                                <li>Địa chỉ Email</li>
                                                <li>{info.email}</li>
                                            </div>
                                        ))
                                   }
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
    </section>
  )
}

export default DetailLevel