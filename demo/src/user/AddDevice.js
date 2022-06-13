import './AddDevice.css'
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
import {Link} from 'react-router-dom'
function AddDevice(){
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
               <div className='bodyBx'>
                    <div className='bodyBx-info'>
                         <div className='bodyBx-info-header'>
                              <h1>Thiết bị</h1>
                              <h2>Danh sách thiết bị</h2>
                              <h3>Thêm thiết bị</h3>
                         </div>
                         <div className='bodyBx-info-right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyBx-info-right-two'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='bodyBx-info-title'>
                              <h1>Quản lý thiết bị</h1>
                         </div>
                    </div>
{/*---------------------------------------------------------------------*/}  
                    <div className='bodyBx-table'>
                         <div className='bodyBx-table-form'>
                              <div className='bodyBx-table-form-title'>
                                   <h1>Thông tin thiết bị</h1>
                              </div>
                              <div className='bodyBx-table-form-content'>
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
                                             <input type='text' value='Nhập dịch vụ sử dụng'/>
                                        </li>
                                        <li>
                                             <p>*</p>
                                             <h1>Là trường thông tin bắt buộc</h1>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
{/*---------------------------------------------------------------------*/}  
                    <div className='bodyBx-button'>
                         <div className='bodyBx-button-center'>
                              <div className='bodyBx-button-center-one'>
                                   <button>Huỷ bỏ</button>
                              </div>
                              <Link to={'/quay-lai-thiet-bi'} className='bodyBx-button-center-two'>
                                   <button>Thêm thiết bị</button>
                              </Link>
                         </div>
                    </div>

{/*---------------------------------------------------------------------*/}
               </div>
          </section>     
     )
}
export default AddDevice