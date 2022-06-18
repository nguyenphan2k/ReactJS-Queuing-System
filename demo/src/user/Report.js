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
import {IoMdArrowDropup} from 'react-icons/io'
import {IoMdArrowDropdown} from 'react-icons/io'
import {FaFileDownload} from 'react-icons/fa'
import {IoMdArrowDropleft} from 'react-icons/io'
import {IoMdArrowDropright} from 'react-icons/io'
import {BiDotsVerticalRounded} from 'react-icons/bi'
function Report() {
  return (
    <section>
         <div className='dashRp'>
                    <div className='dashRp__form'>
                         <div className='dashRp__formImage'>
                              <img src={picture}/>
                         </div>
                         <div className='dashRp__formIcon'>
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
                                                  <li>
                                                       <BiDotsVerticalRounded/>
                                                       <div className='dashRp__formIcon__devide'>
                                                            <div className='dashRp__formIcon__devideOne'>
                                                                 <Link to={'/quan-ly-vai-tro'}>
                                                                      <h1>Quản lý vai trò</h1>
                                                                 </Link>
                                                            </div>
                                                            <div className='dashRp__formIcon__devideTwo'>
                                                                 <Link to={'/quan-ly-tai-khoan'}>
                                                                      <h2>Quản lý tài khoản</h2>
                                                                 </Link>
                                                            </div>
                                                            <div className='dashRp__formIcon__devideThree'>
                                                                 <Link to={'/nhat-ky-nguoi-dung'}>
                                                                      <h3>Nhật ký người dùng</h3>
                                                                 </Link>
                                                            </div> 
                                                       </div>
                                                  </li>
                                             </Link>
                                        </div>     
                                   </li>
                              </ul>
                         </div>
                         <div className='dashRp__formLogout'>
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
                    {/*----------------------------------------------------*/}
                    <div className='bodyRp__headerDown'>
                         <div className='bodyRp__headerDown__load'>
                              <div className='bodyRp__headerDown__loadClick'>
                                   <span><FaFileDownload/></span>
                                   <h1>Tải về</h1>
                              </div>
                         </div>
                    </div>
                    {/*----------------------------------------------------*/}
                    <div className='bodyRp__headerCount'>
                         <div className='bodyRp__headerCount__increase'>
                                   <ul>
                                        <li>
                                             <p><IoMdArrowDropleft/></p>
                                        </li>
                                        <li>
                                             <p>1</p>
                                        </li>
                                        <li><p>2</p></li>
                                        <li><p>3</p></li>
                                        <li><p>4</p></li>
                                        <li><p>5</p></li>
                                        <li><p>...</p></li>
                                        <li><p>10</p></li>
                                        <li>
                                        <p><IoMdArrowDropright/></p>
                                   </li>
                              </ul>
                         </div>
                    </div>
{/*------------------------------------------------------------------------*/}
                    <div className='bodyRp__table'>
                         <div className='bodyRp__tableMain'>
                              <div className='bodyRp__tableMain__one'>
                                   <ul>
                                        <li>
                                             <p>Số thứ tự</p>
                                             <h1><IoMdArrowDropup/></h1>
                                             <h2><IoMdArrowDropdown/></h2>
                                        </li>
                                        <li>
                                             <p>Tên dịch vụ</p>
                                             <h1><IoMdArrowDropup/></h1>
                                             <h2><IoMdArrowDropdown/></h2>
                                        </li>
                                        <li>
                                             <p>Thời gian cấp</p>
                                             <h1><IoMdArrowDropup/></h1>
                                             <h2><IoMdArrowDropdown/></h2>
                                        </li>
                                        <li>
                                             <p>Tình trạng</p>
                                             <h1><IoMdArrowDropup/></h1>
                                             <h2><IoMdArrowDropdown/></h2>
                                        </li>
                                        <li>
                                             <p>Nguồn cấp</p>
                                             <h1><IoMdArrowDropup/></h1>
                                             <h2><IoMdArrowDropdown/></h2>
                                        </li>
                                   </ul>
                              </div>
                              {/*----------------------------------------*/}
                              <div className='bodyRp__tableMain__two'>
                                   <ul>
                                        <li>
                                             <p>2010001</p>
                                        </li>
                                        <li>
                                             <p>Khám tim mạch</p>
                                        </li>
                                        <li>
                                             <p>07:20 - 07/11/2021</p>
                                        </li>
                                        <li>
                                             <span>.</span>
                                             <p>Đang chờ</p>
                                        </li>
                                        <li>
                                             <p>Kiosk</p>
                                        </li>
                                   </ul>
                              </div>
                              {/*----------------------------------------*/}
                              <div className='bodyRp__tableMain__three'>
                                   <ul>
                                        <li>
                                             <p>2010002</p>
                                        </li>
                                        <li>
                                             <p>Răng hàm mặt</p>
                                        </li>
                                        <li>
                                             <p>07:20 - 07/11/2021</p>
                                        </li>
                                        <li>
                                             <span>.</span>
                                             <p>Đã sử dụng</p>
                                        </li>
                                        <li>
                                             <p>Hệ thống</p>
                                        </li>
                                   </ul>
                              </div>
                              {/*----------------------------------------*/}
                              <div className='bodyRp__tableMain__four'>
                                   <ul>
                                        <li>
                                             <p>2010003</p>
                                        </li>
                                        <li>
                                             <p>Khám sản - Phụ khoa</p>
                                        </li>
                                        <li>
                                             <p>07:20 - 07/11/2021</p>
                                        </li>
                                        <li>
                                             <span>.</span>
                                             <p>Bỏ qua</p>
                                        </li>
                                        <li>
                                             <p>Kiosk</p>
                                        </li>
                                   </ul>
                              </div>
                              {/*----------------------------------------*/}
                              <div className='bodyRp__tableMain__five'>
                                   <ul>
                                        <li>
                                             <p>2010004</p>
                                        </li>
                                        <li>
                                             <p>Răng hàm mặt</p>
                                        </li>
                                        <li>
                                             <p>07:20 - 07/11/2021</p>
                                        </li>
                                        <li>
                                             <span>.</span>
                                             <p>Đang chờ</p>
                                        </li>
                                        <li>
                                             <p>Hệ thống</p>
                                        </li>
                                   </ul>
                              </div>
                              {/*----------------------------------------*/}
                              <div className='bodyRp__tableMain__six'>
                                   <ul>
                                        <li>
                                             <p>2010005</p>
                                        </li>
                                        <li>
                                             <p>Tai mũi họng</p>
                                        </li>
                                        <li>
                                             <p>07:20 - 07/11/2021</p>
                                        </li>
                                        <li>
                                             <span>.</span>
                                             <p>Đang chờ</p>
                                        </li>
                                        <li>
                                             <p>Kiosk</p>
                                        </li>
                                   </ul>
                              </div>
                              {/*----------------------------------------*/}
                              <div className='bodyRp__tableMain__seven'>
                                   <ul>
                                        <li>
                                             <p>2010006</p>
                                        </li>
                                        <li>
                                             <p>Khám tổng quát</p>
                                        </li>
                                        <li>
                                             <p>07:20 - 07/11/2021</p>
                                        </li>
                                        <li>
                                             <span>.</span>
                                             <p>Bỏ qua</p>
                                        </li>
                                        <li>
                                             <p>Hệ thống</p>
                                        </li>
                                   </ul>
                              </div>
                              {/*----------------------------------------*/}
                              <div className='bodyRp__tableMain__eight'>
                                   <ul>
                                        <li>
                                             <p>2010007</p>
                                        </li>
                                        <li>
                                             <p>Khám hô hấp</p>
                                        </li>
                                        <li>
                                             <p>07:20 - 07/11/2021</p>
                                        </li>
                                        <li>
                                             <span>.</span>
                                             <p>Đang chờ</p>
                                        </li>
                                        <li>
                                             <p>Kiosk</p>
                                        </li>
                                   </ul>
                              </div>
                              {/*----------------------------------------*/}
                              <div className='bodyRp__tableMain__nine'>
                                   <ul>
                                        <li>
                                             <p>2010008</p>
                                        </li>
                                        <li>
                                             <p>Khám hô hấp</p>
                                        </li>
                                        <li>
                                             <p>07:20 - 07/11/2021</p>
                                        </li>
                                        <li>
                                             <span>.</span>
                                             <p>Đã sử dụng</p>
                                        </li>
                                        <li>
                                             <p>Kiosk</p>
                                        </li>
                                   </ul>
                              </div>
                              {/*----------------------------------------*/}
                              <div className='bodyRp__tableMain__ten'>
                                   <ul>
                                        <li>
                                             <p>2010009</p>
                                        </li>
                                        <li>
                                             <p>Tai mũi họng</p>
                                        </li>
                                        <li>
                                             <p>07:20 - 07/11/2021</p>
                                        </li>
                                        <li>
                                             <span>.</span>
                                             <p>Bỏ qua</p>
                                        </li>
                                        <li>
                                             <p>Hệ thống</p>
                                        </li>
                                   </ul>
                              </div>
                              {/*----------------------------------------*/}
                              <div className='bodyRp__tableMain__eleven'>
                                   <ul>
                                        <li>
                                             <p>20100010</p>
                                        </li>
                                        <li>
                                             <p>Khám sản - Phụ khoa</p>
                                        </li>
                                        <li>
                                             <p>07:20 - 07/11/2021</p>
                                        </li>
                                        <li>
                                             <span>.</span>
                                             <p>Đang chờ</p>
                                        </li>
                                        <li>
                                             <p>Hệ thống</p>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
    </section>
  )
}

export default Report