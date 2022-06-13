import './DetailService.css'
import React, {useEffect, useState} from 'react'
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
import {MdArrowDropDown} from 'react-icons/md'
import {BsCalendarDay} from 'react-icons/bs'
import {MdArrowRight} from 'react-icons/md'
// import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdArrowDropleft} from 'react-icons/io'
import {IoMdArrowDropright} from 'react-icons/io'
import {Link} from 'react-router-dom'
function DetailService(){
     const [change, setChange] = useState("")

     useEffect(() => {
          setChange(Math.floor(Math.random() * 9999))
     }, [])

     const [up, setUp] = useState(1)

     useEffect(() => {
          setInterval(()=>{
               setUp(pre => pre)
          },1000)
     }, [])

     return(
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
{/*---------------------------------------------------------------------*/}
               <div className='bodyDs'>
                    <div className='bodyDs-info'>
                         <div className='bodyDs-info-header'>
                              <h1>Dịch vụ</h1>
                              <h2>Danh sách dịch vụ</h2>
                              <h3>Chi tiết</h3>
                         </div>
                         <div className='bodyDs-info-right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyDs-info-right-two'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='bodyDs-info-title'>
                              <h1>Quản lý dịch vụ</h1>
                         </div>
                    </div>
                    <div className='bodyDs-add'>
                         <div className='bodyDs-add-left'>
                              <div className='bodyDs-add-left-title'>
                                   <h1>Thông tin dịch vụ</h1>
                                   <ul>
                                        <li>Mã dịch vụ:</li>
                                        <li>201</li>
                                        <li>Tên dịch vụ:</li>
                                        <li>Khám tim mạch</li>
                                        <li>Mô tả:</li>
                                        <li>Chuyên các bệnh lý về tim</li>
                                   </ul>
                              </div>
                              <div className='bodyDs-add-left-title-two'>
                                   <h1>Quy tắc cấp số</h1>
                                   <ul>
                                        <li>Tăng tự động:</li>
                                        <li>Prefix:</li>
                                        <li>Reset mỗi ngày</li>
                                        <li>Ví dụ: 201-2001</li>
                                        <li>
                                             <p>{up}</p>
                                        </li>
                                        <li>
                                             <p>đến</p>
                                        </li>
                                        <li>
                                             <p>9999</p>
                                        </li>
                                        <li>
                                             <p>{change}</p>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <div className='bodyDs-time'>
                         <div className='bodyDs-time-right'>
                              <div className='bodyDs-time-right-content'>
                                   <h1>Trạng thái</h1>
                              </div>
                              <div className='bodyDs-time-right-calender'>
                                   <p className='p'>Tất cả</p>
                                   <span><MdArrowDropDown/></span>
                              </div>
                              <div className='bodyDs-time-right-content-two'>
                                   <h1>Chọn thời gian</h1>
                              </div>
                              <div className='bodyDs-time-right-calender-two'>
                                   <span><BsCalendarDay/></span>
                                   <h1>10/10/2021</h1>
                              </div>
                              <div className='bodyDs-time-right-calender-arrow'>
                                   <span><MdArrowRight/></span>
                              </div>
                              <div className='bodyDs-time-right-calender-three'>
                                   <span><BsCalendarDay/></span>
                                   <h1>18/10/2021</h1>
                              </div>
                              <div className='bodyDs-time-right-table'>
                                   <div className='bodyDs-time-right-form'>
                                        <div className='bodyDs-time-right-table-one'>
                                             <ul>
                                                  <li>
                                                       <p>Số thứ tự</p>
                                                  </li>
                                                  <li>
                                                       <p>Trạng thái</p>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className='bodyDs-time-right-table-two'>
                                             <ul>
                                                  <li>
                                                       <p>2010001</p>
                                                  </li>
                                                  <li>
                                                       <p>Đã hoàn thành</p>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className='bodyDs-time-right-table-three'>
                                             <ul>
                                                  <li>
                                                       <p>2010002</p>
                                                  </li>
                                                  <li>
                                                       <p>Đã hoàn thành</p>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className='bodyDs-time-right-table-four'>
                                             <ul>
                                                  <li>
                                                       <p>2010003</p>
                                                  </li>
                                                  <li>
                                                       <p>Đang thực hiện</p>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className='bodyDs-time-right-table-five'>
                                             <ul>
                                                  <li>
                                                       <p>2010004</p>
                                                  </li>
                                                  <li>
                                                       <p>Vắng</p>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className='bodyDs-time-right-table-six'>
                                             <ul>
                                                  <li>
                                                       <p>2010005</p>
                                                  </li>
                                                  <li>
                                                       <p>Đã hoàn thành</p>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className='bodyDs-time-right-table-seven'>
                                             <ul>
                                                  <li>
                                                       <p>2010006</p>
                                                  </li>
                                                  <li>
                                                       <p>Đang thực hiện</p>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className='bodyDs-time-right-table-eight'>
                                             <ul>
                                                  <li>
                                                       <p>2010007</p>
                                                  </li>
                                                  <li>
                                                       <p>Vắng</p>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className='bodyDs-time-right-table-nine'>
                                             <ul>
                                                  <li>
                                                       <p>2010008</p>
                                                  </li>
                                                  <li>
                                                       <p>Đã hoàn thành</p>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className='bodyDs-time-number'>
                                   <div className='bodyDs-time-number-up'>
                                        <ul>
                                             <li>
                                                  <span><IoMdArrowDropleft/></span>
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
                                                  <span><IoMdArrowDropright/></span>
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
export default DetailService