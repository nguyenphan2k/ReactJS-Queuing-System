import './Service.css'
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
import arrow from '../images/Vector (12).png'
import {MdArrowDropDown} from 'react-icons/md'
import {BsCalendarDay} from 'react-icons/bs'
import {MdArrowRight} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {SiAddthis} from 'react-icons/si'
function Service(){
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
{/*--------------------------------------------------------------*/}
               <div className='menuSx'>
                    <div className='menuSx-info'>
                         <div className='info-header'>
                              <h1>Dịch vụ</h1>
                              <ul>
                                   <li><img src={arrow}/></li>
                              </ul>
                              <h2>Danh sách dịch vụ</h2>
                         </div>
                         <div className='info-right'>
                              <img src={rings}/>
                         </div>
                         <div className='info-right-two'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='info-title'>
                              <h1>Quản lý dịch vụ</h1>
                         </div>
                    </div>
                    <div className='statusSx-form'>
                         <div className='form-status'>
                              <h1>Trạng thái hoạt động</h1>
                         </div>
                         <div className='form-status-all'>
                              <div className='form-status-all-one'>
                                   <h1>Tất cả</h1>
                                   <span><MdArrowDropDown/></span>
                              </div>
                         </div>
                    </div>
                    <div className='statusSx-form-next'>
                         <div className='form-status-next'>
                              <h1>Chọn thời gian</h1>
                         </div>
                         <div className='form-status-all-next'>
                              <div className='form-status-all-one-next'>
                                   <span><BsCalendarDay/></span>
                                   <h1>10/10/2021</h1>
                              </div>
                              <div className='form-status-all-three-next'>
                                   <span><MdArrowRight/></span>
                              </div>
                              <div className='form-status-all-two-next'>
                                   <span><BsCalendarDay/></span>
                                   <h1>18/10/2021</h1>
                              </div>
                         </div>
                    </div>
                    <div className='statusSx-form-search'>
                         <div className='form-status'>
                              <h1>Từ khoá</h1>
                         </div>
                         <div className='form-status-all'>
                              <div className='form-status-all-one'>
                                   <h1>Nhập từ khoá</h1>
                                   <span><AiOutlineSearch/></span>
                              </div>
                         </div>
                    </div>
{/*--------------------------------------------------------------------*/} 
                    <div className='addSx-form'>
                         <div className='addSx-form-device'>
                              <Link to={'/them-dich-vu'} className='addSx-form-device-click'>
                                   <span><SiAddthis/></span>
                                   <h1>Thêm dịch vụ</h1>
                              </Link>
                         </div>
                    </div>
{/*--------------------------------------------------------------------*/}                    
                    <div className='tableSx'>
                         <div className='tableSx-form'>
                              <div className='form-detail'>
                                   <ul>
                                        <li>Mã dịch vụ</li>
                                        <li>Tên dịch vụ</li>
                                        <li>Mô tả</li> 
                                        <li>Trạng thái hoạt động</li>
                                        <li>No</li>
                                        <li>No</li> 
                                   </ul>
                              </div>
                              <div className='form-detail_two'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>Mô tả dịch vụ 1</li>
                                        <li>
                                             <span>.</span>
                                             <p>Hoạt động</p>
                                        </li>
                                        <li>
                                             <div>
                                                  <Link to={'/chi-tiet-dich-vu'}>
                                                       <p>Chi tiết</p>
                                                  </Link>
                                             </div>
                                        </li>
                                        <li>
                                             <div>
                                                  <Link to={'/cap-nhat-dich-vu'}>
                                                       <p>Cập nhật</p>
                                                  </Link>
                                             </div>
                                        </li>
                                   </ul>
                              </div>
                              <div className='form-detail_three'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>Hoạt động</li>
                                        <li>
                                             <span>.</span>
                                             <p>Hoạt động</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              
                              <div className='form-detail_four'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>Mô tả dịch vụ 1</li>
                                        <li>
                                             <span>.</span>
                                             <p>Ngưng hoạt động</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div> 
                              <div className='form-detail_five'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>Mô tả dịch vụ 1</li>
                                        <li>
                                             <span>.</span>
                                             <p>Hoạt động</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              
                              <div className='form-detail_six'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>Mô tả dịch vụ 1</li>
                                        <li>
                                             <span>.</span>
                                             <p>Hoạt động</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              <div className='form-detail_seven'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>Mô tả dịch vụ 1</li>
                                        <li>
                                             <span>.</span>
                                             <p>Hoạt động</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              <div className='form-detail_eight'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>Mô tả dịch vụ 1</li>
                                        <li>
                                             <span>.</span>
                                             <p>Hoạt động</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              <div className='form-detail_nine'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>Mô tả dịch vụ 1</li>
                                        <li>
                                             <span>.</span>
                                             <p>Ngưng hoạt động</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              <div className='form-detail_ten'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>Mô tả dịch vụ 1</li>
                                        <li>
                                             <span>.</span>
                                             <p>Hoạt động</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
{/*----------------------------------------------------------------------*/}
          </section>
     )
}
export default Service