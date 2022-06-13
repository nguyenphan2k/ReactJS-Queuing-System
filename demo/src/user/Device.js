import './Device.css'
import picture from '../images/Alta.png'
import {MdDashboard} from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {BiLayer} from 'react-icons/bi'
import {AiOutlineSetting} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {MdArrowDropDown} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import rings from '../images/Vector.png'
import users from '../images/user.png'
function Device(){
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
{/*----------------------------------------------------------------------*/}
               <div className='menuDx'>
                    <div className='menuDx-info'>
                         <div className='info-header'>
                              <h1>Thiết bị</h1>
                              <h2>Danh sách thiết bị</h2>
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
                              <h1>Danh sách thiết bị</h1>
                         </div>
                    </div>
{/*----------------------------------------------------------------------*/}
                    <div className='statusBx-form'>
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
                    <div className='statusBx-form-next'>
                         <div className='form-status-next'>
                              <h1>Trạng thái kết nối</h1>
                         </div>
                         <div className='form-status-all-next'>
                              <div className='form-status-all-one-next'>
                                   <h1>Tất cả</h1>
                                   <span><MdArrowDropDown/></span>
                              </div>
                         </div>
                    </div>
                    <div className='statusBx-form-search'>
                         <div className='form-status-search'>
                              <h1>Từ khoá</h1>
                         </div>
                         <div className='form-status-all-search'>
                              <div className='form-status-all-one-search'>
                                   <h1>Nhập từ khoá</h1>
                                   <span><AiOutlineSearch/></span>
                              </div>
                         </div>
                    </div>
{/*----------------------------------------------------------------------*/}
                    <div className='addBx-form'>
                         <div className='addBx-form-device'>
                              <Link to={'/them-thiet-bi'} className='addBx-form-device-click'>
                                   <h1>Thêm thiết bị</h1>
                              </Link>
                         </div>
                    </div>
{/*----------------------------------------------------------------------*/}
                    <div className='tableBx'>
                         <div className='tableBx-form'>
                              <div className='form-detail'>
                                   <ul>
                                        <li>Mã thiết bị</li>
                                        <li>Tên thiết bị</li>
                                        <li>Địa chi IP</li>
                                        <li>Trạng thái hoạt động</li>
                                        <li>Trạng thái kết nối</li>
                                        <li>Dịch vụ sử dụng</li>
                                        <li>No</li>
                                        <li>No</li>
                                   </ul>
                              </div>
                              <div className='form-detail_two'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>192.168.1.0</li>
                                        <li>Ngưng hoạt động</li>
                                        <li>Mất kết nối</li>
                                        <li>Khám tim mạch,Khám mắt...
                                             <p>Xem thêm</p>
                                        </li>
                                        <li>
                                             <div>
                                                  <Link to={'/chi-tiet-thiet-bi'}>
                                                       <p>Chi tiết</p>
                                                  </Link>
                                             </div>
                                        </li>
                                        <li>
                                             <div>
                                                  <Link to={'/nang-cap-thiet-bi'}>
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
                                        <li>192.168.1.0</li>
                                        <li>Ngưng hoạt động</li>
                                        <li>Mất kết nối</li>
                                        <li>Khám tim mạch,Khám mắt...
                                             <p>Xem thêm</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              <div className='form-detail_four'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>192.168.1.0</li>
                                        <li>Ngưng hoạt động</li>
                                        <li>Mất kết nối</li>
                                        <li>Khám tim mạch,Khám mắt...
                                             <p>Xem thêm</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              <div className='form-detail_five'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>192.168.1.0</li>
                                        <li>Ngưng hoạt động</li>
                                        <li>Mất kết nối</li>
                                        <li>Khám tim mạch,Khám mắt...
                                             <p>Xem thêm</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              <div className='form-detail_six'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>192.168.1.0</li>
                                        <li>Ngưng hoạt động</li>
                                        <li>Mất kết nối</li>
                                        <li>Khám tim mạch,Khám mắt...
                                             <p>Xem thêm</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              <div className='form-detail_seven'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>192.168.1.0</li>
                                        <li>Ngưng hoạt động</li>
                                        <li>Mất kết nối</li>
                                        <li>Khám tim mạch,Khám mắt...
                                             <p>Xem thêm</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              <div className='form-detail_eight'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>192.168.1.0</li>
                                        <li>Ngưng hoạt động</li>
                                        <li>Mất kết nối</li>
                                        <li>Khám tim mạch,Khám mắt...
                                             <p>Xem thêm</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              <div className='form-detail_nine'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>192.168.1.0</li>
                                        <li>Ngưng hoạt động</li>
                                        <li>Mất kết nối</li>
                                        <li>Khám tim mạch,Khám mắt...
                                             <p>Xem thêm</p>
                                        </li>
                                        <li>Chi tiết</li>
                                        <li>Cập nhật</li>
                                   </ul>
                              </div>
                              <div className='form-detail_ten'>
                                   <ul>
                                        <li>KIO_01</li>
                                        <li>Kiosk</li>
                                        <li>192.168.1.0</li>
                                        <li>Ngưng hoạt động</li>
                                        <li>Mất kết nối</li>
                                        <li>Khám tim mạch,Khám mắt...
                                             <p>Xem thêm</p>
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
export default Device;