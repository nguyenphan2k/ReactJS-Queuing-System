import './DetailService.css'
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
function DetailService(){
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
                                             <p>0001</p>
                                        </li>
                                        <li>
                                             <p>đến</p>
                                        </li>
                                        <li>
                                             <p>9999</p>
                                        </li>
                                        <li>
                                             <p>0001</p>
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
                                   <p className='phe'>Tất cả</p>
                                   <span><MdArrowDropDown/></span>
                              </div>
                              <div className='dropdown'>
                              <ul>
                                   <li>hello</li>
                              </ul>
                         </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}
export default DetailService