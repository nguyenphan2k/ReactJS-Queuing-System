import './Level.css'
import picture from '../images/Alta.png'
import {MdDashboard} from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {BiLayer} from 'react-icons/bi'
import {AiOutlineSetting} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import rings from '../images/Vector.png'
import users from '../images/user.png'
import arrows from '../images/Vector (12).png'
import {MdArrowDropDown} from 'react-icons/md'
import {BsCalendarDay} from 'react-icons/bs'
import {MdArrowRight} from 'react-icons/md'
import {useState, useEffect} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
function Level() {
     const [day, setDay] = useState(1)

     useEffect(() => {
          setInterval(() => {
               setDay(pre => pre)
          }, 1000);
     }, []);

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
{/*------------------------------------------------------------*/}
               <div className='bodyLx'>
                    <div className='bodyLx__header'>
                         <div className='bodyLx__headerInfo'>
                              <h1>Cấp số</h1>
                              <ul>
                                   <li><img src={arrows}/></li>
                              </ul>
                              <h2>Danh sách cấp số</h2>
                         </div>
                         <div className='bodyLx__headerInfo__right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyLx__headerInfo__rightTwo'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='bodyLx__headerInfo__title'>
                              <h1>Quản lý cấp số</h1>
                         </div>
                    </div>
{/*----------------------------------------------------------*/}
                    <div className='bodyLx__form'>
                         <div className='bodyLx__formStatus'>
                              <h1>Tên dịch vụ</h1>
                         </div>
                         <div className='bodyLx__formStatus__all'>
                              <div className='bodyLx__formStatus__allOne'>
                                   <h1>Tất cả</h1>
                                   <span><MdArrowDropDown/></span>
                              </div>
                         </div>
                         {/*--------------------------*/}
                         <div className='bodyLx__formStatus__next'>
                              <h1>Tình trạng</h1>
                         </div>
                         <div className='bodyLx__formStatus__nextAll'>
                              <div className='bodyLx__formStatus__nextAll__one'>
                                   <h1>Tất cả</h1>
                                   <span><MdArrowDropDown/></span>
                              </div>
                         </div>
                         {/*--------------------------*/}
                         <div className='bodyLx__formSource__next'>
                              <h1>Nguồn cấp</h1>
                         </div>
                         <div className='bodyLx__formSource__nextAll'>
                              <div className='bodyLx__formSource__nextAll__one'>
                                   <h1>Tất cả</h1>
                                   <span><MdArrowDropDown/></span>
                              </div>
                         </div>
                         {/*--------------------------*/}
                         <div className='bodyLx__formCalender'>
                              <div className='bodyLx__formCalender__time'>
                                   <h1>Chọn thời gian</h1>
                              </div>
                              <div className='bodyLx__formCalender__next'>
                                   <div className='bodyLx__formCalender__nextOne'>
                                        <span><BsCalendarDay/></span>
                                        <h1>{day}/10/2021</h1>
                                   </div>
                                   <div className='bodyLx__formCalender__nextTwo'>
                                        <span><MdArrowRight/></span>
                                   </div>
                                   <div className='bodyLx__formCalender__nextThree'>
                                        <span><BsCalendarDay/></span>
                                        <h1>18/10/2021</h1>
                                   </div>
                              </div>
                         </div>
                         {/*--------------------------*/}
                         <div className='bodyLx__formKey'>
                              <div className='bodyLx__formKey__title'>
                                   <h1>Từ khoá</h1>
                              </div>
                              <div className='bodyLx__formKey__search'>
                                   <input placeholder='Nhập từ khoá'></input>
                                   <span><AiOutlineSearch/></span>
                              </div>
                         </div>
                    </div>
                    {/*---------------------------------------------*/}
                    <div className='bodyLx__table'>
                         <div className='bodyLx__tableForm'>
                              <div className='bodyLx__tableForm__count'>
                                   <ul>
                                        <li>STT</li>
                                        <li>Tên khách hàng</li>
                                        <li>Tên dịch vụ</li>
                                        <li>Thời gian Cấp</li> 
                                        <li>Hạn sử dụng</li>
                                        <li>Trạng thái</li>
                                        <li>Nguồn cấp</li> 
                                        <li>No</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countOne'>
                                   <ul>
                                        <li>2010001</li>
                                        <li>Lê Huỳnh Ái Vân</li>
                                        <li>Khám tim mạch</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>Đang chờ</p>
                                        </li> 
                                        <li>Kiosk</li>
                                        <li>
                                             <div>
                                                  <Link to={'/chi-tiet-cap-so'}>
                                                       Chi tiết
                                                  </Link>
                                             </div>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
    </section>
  )
}

export default Level