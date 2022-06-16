import React from 'react'
import './Report.css'
import picture from '../images/Alta.png'
import {MdDashboard} from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {AiOutlineSetting} from 'react-icons/ai'
import {BiLayer} from 'react-icons/bi'
import {BiCamera} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import arrows from '../images/Vector (12).png'
import rings from '../images/Vector.png'
import users from '../images/user.png'
import {BsCalendarDay} from 'react-icons/bs'
import {MdArrowRight} from 'react-icons/md'
function Report() {
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
{/*-----------------------------------------------*/}
               <div className='bodyRp'>
                    <div className='bodyRp__header'>
                         <div className='bodyRp__headerInfo'>
                              <h1>Báo cáo</h1>
                              <ul>
                                   <li><img src={arrows}/></li>
                              </ul>
                              <h2>Lập báo cáo</h2>
                         </div>
                         <div className='bodyRp__headerInfo__right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyRp__headerInfo__rightTwo'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                    </div>
                    <div className='bodyRp__headerTime'>
                         <div className='bodyRp__headerTime__title'>
                              <h1>Chọn thời gian</h1>
                         </div>
                         <div className='bodyRp__headerTime__calender'>
                              <div className='bodyRp__headerTime__calenderOne'>
                                   <span><BsCalendarDay/></span>
                                   <h1>10/10/2021</h1>
                              </div>
                              <div className='bodyRp__headerTime__calenderTwo'>
                                   <span><MdArrowRight/></span>
                              </div>
                              <div className='bodyRp__headerTime__calenderThree'>
                                   <span><BsCalendarDay/></span>
                                   <h1>18/10/2021</h1>
                              </div>
                         </div>
                    </div>
{/*------------------------------------------------------------------------*/}
                    <div className='bodyRp__table'>
                         <div className='bodyRp__tableMain'>
                              <div className='bodyRp__tableMain__one'>
                                   <ul>
                                        <li>
                                             <p>Số thứ tự</p>
                                             <div className='bodyRp__tableMain__oneSmall'>
                                                  <li>2040001</li>
                                             </div>
                                        </li>
                                        <li>Tên dịch vụ</li>
                                        <li>Thời gian cấp</li>
                                        <li>Tình trạng</li>
                                        <li>Nguồn cấp</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
    </section>
  )
}

export default Report