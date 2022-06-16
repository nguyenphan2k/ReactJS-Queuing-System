import './Level.css'
import React from 'react'
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
import {IoMdArrowDropleft} from 'react-icons/io'
import {IoMdArrowDropright} from 'react-icons/io'
import {SiAddthis} from 'react-icons/si'
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
                         {/*--------------------------*/}
                         <div className='bodyLx__formAdd'>
                              <div className='bodyLx__formAdd__level'>
                                   <Link to={'/them-cap-so'} className='bodyLx__formAdd__levelClick'>
                                        <span><SiAddthis/></span>
                                        <h1>Cấp số mới</h1>
                                   </Link>
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
                              <div className='bodyLx__tableForm__countTwo'>
                                   <ul>
                                        <li>2010002</li>
                                        <li>Huỳnh Ái Vân</li>
                                        <li>Khám sản - Phụ Khoa</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>Đã sử dụng</p>
                                        </li> 
                                        <li>Kiosk</li>
                                        <li>Chi tiết</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countThree'>
                                   <ul>
                                        <li>2010003</li>
                                        <li>Lê Ái Vân</li>
                                        <li>Khám răng hàm mặt</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>Đang chờ</p>
                                        </li> 
                                        <li>Hệ thống</li>
                                        <li>Chi tiết</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countFour'>
                                   <ul>
                                        <li>2010004</li>
                                        <li>Nguyễn Ái Vân</li>
                                        <li>Khám tai mũi họng</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>Đang chờ</p>
                                        </li> 
                                        <li>Hệ thống</li>
                                        <li>Chi tiết</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countFive'>
                                   <ul>
                                        <li>2010005</li>
                                        <li>Trần Thị Ái Vân</li>
                                        <li>Khám hô hấp</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>Đang chờ</p>
                                        </li> 
                                        <li>Kiosk</li>
                                        <li>Chi tiết</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countSix'>
                                   <ul>
                                        <li>2010006</li>
                                        <li>Lê Huỳnh Nghĩa</li>
                                        <li>Khám mắt</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>Đã sử dụng</p>
                                        </li> 
                                        <li>Hệ thống</li>
                                        <li>Chi tiết</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countSeven'>
                                   <ul>
                                        <li>2010007</li>
                                        <li>Lê Huỳnh Đức</li>
                                        <li>Khám tiêu hoá</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>Đã sử dụng</p>
                                        </li> 
                                        <li>Kiosk</li>
                                        <li>Chi tiết</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countEight'>
                                   <ul>
                                        <li>2010008</li>
                                        <li>Phạm Văn Mạnh</li>
                                        <li>Khám tổng quát</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>Bỏ qua</p>
                                        </li> 
                                        <li>Hệ thống</li>
                                        <li>Chi tiết</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countNine'>
                                   <ul>
                                        <li>2010009</li>
                                        <li>Lê Thị Cẩm Tiên</li>
                                        <li>Khám da liễu</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>Đã sử dụng</p>
                                        </li> 
                                        <li>Hệ thống</li>
                                        <li>Chi tiết</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__increase'>
                                   <div className='bodyLx__tableForm__increaseNumber'>
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
                         </div>
                    </div>
               </div>
    </section>
  )
}

export default Level