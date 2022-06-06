import './UpdateDevice.css'
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
// import {FiDelete} from 'react-icons/fi'
import {Link} from 'react-router-dom'
function UpdateDevice(){
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
               <div className='bodyUx'>
                    <div className='bodyUx-info'>
                         <div className='bodyUx-info-header'>
                              <h1>Thiết bị</h1>
                              <ul>
                                   <li><img src={arrows}/></li>
                                   <li><img src={arrows}/></li>
                              </ul>
                              <h2>Danh sách thiết bị</h2>
                              <h3>Cập nhật thiết bị</h3>
                         </div>
                         <div className='bodyUx-info-right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyUx-info-right-two'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='bodyUx-info-title'>
                              <h1>Quản lý thiết bị</h1>
                         </div>
                    </div>
                    <div className='bodyUx-table'>
                         <div className='bodyUx-table-form'>
                              <div className='bodyUx-table-form-title'>
                                   <h1>Thông tin thiết bị</h1>
                              </div>
                              <div className='bodyUx-table-form-content'>
                                   <ul>
                                        <li>
                                             <h1>Mã thiết bị:</h1>
                                             <input type='text' value='Nhập mã thiết bị'/>
                                        </li>
                                        <li>
                                             <h1>Loại thiết bị:</h1>
                                             <input type='text' value='Chọn loại thiết bị'/>
                                        </li>
                                        <li>
                                             <h1>Tên thiết bị:</h1>
                                             <input type='text' value='Nhập tên thiết bị'/>
                                        </li>
                                        <li>
                                             <h1>Tên đăng nhập:</h1>
                                             <input type='text' value='Nhập tài khoản'/>
                                        </li>
                                        <li>
                                             <h1>Địa chỉ IP:</h1>
                                             <input type='text' value='Nhập địa chỉ IP'/>
                                        </li>
                                        <li>
                                             <h1>Mật khẩu:</h1>
                                             <input type='text' value='Nhập mật khẩu'/>
                                        </li>
                                        <li>
                                             <h1>Dịch vụ sử dụng:</h1>
                                             
                                        </li>
                                        <li>
                                             <p>*</p>
                                             <h1>Là trường thông tin bắt buộc</h1>
                                        </li>
                                   </ul>
                              </div>
                         </div>
{/*---------------------------------------------------------------------*/}                         
                    </div>
                    <div className='bodyUx-button'>
                              <div className='bodyUx-button-center'>
                                   <Link to={'/huy-bo'} className='bodyUx-button-center-one'>
                                        <button>Huỷ bỏ</button>
                                   </Link>
                                   <Link to={'/cap-nhat-tiep'} className='bodyUx-button-center-two'>
                                        <button>Thêm thiết bị</button>
                                   </Link>
                              </div>
                    </div>
               </div>
{/*---------------------------------------------------------------------*/}              
          </section>
     )
}
export default UpdateDevice