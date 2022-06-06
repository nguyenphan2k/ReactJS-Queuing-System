import './DetailDevice.css'
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
import { Link } from 'react-router-dom'
import arrow from '../images/Vector (12).png'
function DetailDevice(){
     return(
          <section>
               <div className='contentBX'>
                    <div className='formBX'>
                         <img src={picture}/>
                         <div className='iconBX'>
                              <ul>
                                   <li>
                                        <span><MdDashboard/></span>
                                        Dashboard
                                   </li>
                                   <li>
                                        <span><FiMonitor/></span>
                                        Thiết bị
                                   </li>
                                   <li>
                                        <span><BiMessageRoundedDots/></span>
                                        Dịch vụ
                                   </li>
                                   <li>
                                        <span><BiLayer/></span>
                                        Cấp số
                                   </li>
                                   <li>
                                        <span><HiOutlineDocumentReport/></span>
                                        Báo cáo
                                   </li>
                                   <li>
                                        <span><AiOutlineSetting/></span>
                                         Cài đặt hệ thống
                                   </li>
                              </ul>
                         </div>
                         <div className='logoutBx'>
                              <ul>
                                   <li>
                                        <span><FiLogOut/></span>
                                        Đăng xuất
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
{/*---------------------------------------------------------------------*/}
               <div className='bodyAx'>
                    <div className='bodyAx-info'>
                         <div className='bodyAx-info-header'>
                              <h1>Thiết bị</h1>
                              <ul>
                                   <li><img src={arrow}/></li>
                                   <li><img src={arrow}/></li>
                              </ul>
                              <h2>Danh sách thiết bị</h2>
                              <h3>Chi tiết thiết bị</h3>
                         </div>
                         <div className='bodyAx-info-right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyAx-info-right-two'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='bodyAx-info-title'>
                              <h1>Quản lý thiết bị</h1>
                         </div>
                    </div>
{/*---------------------------------------------------------------------*/}
                    <div className='addAx-form'>
                         <div className='addAx-form-device'>
                              <Link to={'/nang-cap'} className='addAx-form-device-click'>
                                   <p>Cập nhật thiết bị</p>
                              </Link>
                         </div>
                    </div>
{/*---------------------------------------------------------------------*/}                    
                    <div className='textAx'>
                         <div className='textAx-table'>
                              <div className='textAx-table-title'>
                                   <h1>Thông tin thiết bị</h1>
                              </div>
                              <div className='textAx-table-content'>
                                   <ul>
                                        <li>Mã thiết bị:</li>
                                        <li>KIO_01</li>
                                        <li>Tên thiết bị:</li>
                                        <li>Kiosk</li>
                                        <li>Địa chỉ IP:</li>
                                        <li>128.172.308</li>
                                        <li>Loại thiết bị:</li>
                                        <li>Kiosk</li>
                                        <li>Tên đăng nhập:</li>
                                        <li>Linhkyo011</li>
                                        <li>Mật khẩu:</li>
                                        <li>CMS</li>
                                        <li>Dịch vụ sử dụng:</li>
                                        <li>Khám tim mạch,Khám sản - Phụ khoa,Khám răng hàm mặt,Khám tai mũi họng,Khám hô hấp,Khám tổng quát</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
{/*---------------------------------------------------------------------*/}
          </section>
     )
}
export default DetailDevice