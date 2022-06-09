import './AddService.css'
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
import {Link} from 'react-router-dom'
function AddService(){
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
               <div className='bodyDx'>
                    <div className='bodyDx-info'>
                         <div className='bodyDx-info-header'>
                              <h1>Dịch vụ</h1>
                              <ul>
                                   <li><img src={arrows}/></li>
                                   <li><img src={arrows}/></li>
                              </ul>
                              <h2>Danh sách dịch vụ</h2>
                              <h3>Thêm dịch vụ</h3>
                         </div>
                         <div className='bodyDx-info-right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyDx-info-right-two'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='bodyDx-info-title'>
                              <h1>Quản lý dịch vụ</h1>
                         </div>
                    </div>
                    <div className='bodyDx-table'>
                         <div className='bodyDx-table-form'>
                              <div className='bodyDx-table-form-title'>
                                   <h1>Thông tin dịch vụ</h1>
                              </div>
                              <div className='bodyDx-table-form-content'>
                                   <ul>
                                        <li>
                                             <h2>*</h2>
                                             <h1>Mã dịch vụ:</h1>
                                             <input type='text' placeholder='201'/>
                                        </li>
                                        <li>
                                             <h2>*</h2>
                                             <h1>Tên dịch vụ:</h1>
                                             <input type='text' placeholder='Khám tim mạch'/>
                                        </li>
                                        <li>
                                             <h1>Mô tả:</h1>
                                             <input type='text' placeholder='Mô tả dịch vụ'/>
                                        </li>
                                   </ul>
                              </div>
                              <div className='bodyDx-table-form-title-next'>
                                   <h1>Quy tắc cấp số</h1>
                              </div>
                              <div className='bodyDx-checkbox'>
                                   <input type='checkbox'/>      
                                   <h1>Tăng tự động từ:</h1>
                              </div>
                              <div className='bodyDx-checkbox-two'>
                                   <input type='checkbox'/>      
                                   <h1>Prefix:</h1>
                              </div>
                              <div className='bodyDx-checkbox-three'>
                                   <input type='checkbox'/>      
                                   <h1>Surfix:</h1>
                              </div>
                              <div className='bodyDx-checkbox-four'>
                                   <input type='checkbox'/>      
                                   <h1>Resert mỗi ngày</h1>
                              </div>
                              <div className='bodyDx-checkbox-five'>      
                                   <h1>0001</h1>
                              </div>
                              <div className='bodyDx-checkbox-six'>      
                                   <h1>0001</h1>
                              </div>
                              <div className='bodyDx-checkbox-seven'>      
                                   <h1>0001</h1>
                              </div>
                              <div className='bodyDx-checkbox-eight'>      
                                   <p>đến</p>
                              </div>
                              <div className='bodyDx-checkbox-nine'>      
                                   <h1>9999</h1>
                              </div>
                              <div className='bodyDx-checkbox-ten'>
                                   <h1>*</h1>      
                                   <p>Là trường thông tin bắt buộc</p>
                              </div>
                         </div>
                    </div> 
                    <div className='bodyDx-button'>
                         <div className='bodyDx-button-center'>
                              <Link to={'/huy-bo-dich-vu'} className='bodyDx-button-center-one'>
                                   <button>Huỷ bỏ</button>
                              </Link>
                              <Link to={'/quay-lai-dich-vu'} className='bodyDx-button-center-two'>
                                   <button>Thêm thiết bị</button>
                              </Link>
                         </div>
                    </div>
{/*---------------------------------------------------------------------*/}   
               </div>
          </section>
     )
}
export default AddService