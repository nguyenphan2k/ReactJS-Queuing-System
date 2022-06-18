import React from 'react'
import './AddRole.css'
import picture from '../images/Alta.png'
import {MdDashboard} from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {AiOutlineSetting} from 'react-icons/ai'
import {BiLayer} from 'react-icons/bi'
import {BiCamera} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import arrows from '../images/Vector (12).png'
import rings from '../images/Vector.png'
import users from '../images/user.png'
function AddRole() {
  return (
    <section>
         <div className='dashRp'>
                    <div className='dashRp__form'>
                         <div className='dashRp__formImage'>
                              <img src={picture}/>
                         </div>
                         <div className='dashRp__formIcon'>
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
                                                  <li>
                                                       <BiDotsVerticalRounded/>
                                                       <div className='dashRp__formIcon__devide'>
                                                            <div className='dashRp__formIcon__devideOne'>
                                                                 <Link to={'/quan-ly-vai-tro'}>
                                                                      <h1>Quản lý vai trò</h1>
                                                                 </Link>
                                                            </div>
                                                            <div className='dashRp__formIcon__devideTwo'>
                                                                 <Link to={'/quan-ly-tai-khoan'}>
                                                                      <h2>Quản lý tài khoản</h2>
                                                                 </Link>
                                                            </div>
                                                            <div className='dashRp__formIcon__devideThree'>
                                                                 <Link to={'/nhat-ky-nguoi-dung'}>
                                                                      <h3>Nhật ký người dùng</h3>
                                                                 </Link>
                                                            </div> 
                                                       </div>
                                                  </li>
                                             </Link>
                                        </div>     
                                   </li>
                              </ul>
                         </div>
                         <div className='dashRp__formLogout'>
                              <ul>
                                   <li>
                                        <span><FiLogOut/></span>
                                        <p>Đăng xuất</p>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
{/*----------------------------------------------------------*/}
               <div className='bodyAro'>
                    <div className='bodyAro__table'>
                         <div className='bodyAro__tableHeader'>
                              <h1>Cài đặt hệ thống</h1>
                              <ul>
                                   <li><img src={arrows}/></li>
                                   <li><img src={arrows}/></li>
                              </ul>
                              <h2>Quản lý vai trò</h2>
                              <h3>Thêm vai trò</h3>
                              <h4>Danh sách vai trò</h4>
                         </div>
                         <div className='bodyAro__tableHeader__right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyAro__tableHeader__rightTwo'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                    </div>
                    <div className='bodyAro__form'>
                         <div className='bodyAro__formBig'>
                              <div className='bodyAro__formBig__left'>
                                   <h1>Thông tin vai trò</h1>
                              </div>
                              <div className='bodyAro__formBig__leftOne'>
                                   <ul>
                                        <li>
                                             <h1>Tên vai trò</h1>
                                             <span>*</span>
                                        </li>
                                        <li>Nhập tên vai trò</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
    </section>
  )
}

export default AddRole