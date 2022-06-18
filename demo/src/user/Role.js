import React from 'react'
import './Role.css'
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
import {AiOutlineSearch} from 'react-icons/ai'
import {MdAddBox} from 'react-icons/md'
function Role() {
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
{/*------------------------------------------------------------*/}
               <div className='bodyRe'>
                    <div className='bodyRe__table'>
                         <div className='bodyRe__tableHeader'>
                              <h1>Cài đặt hệ thống</h1>
                              <ul>
                                   <li><img src={arrows}/></li>
                              </ul>
                              <h2>Quản lý vai trò</h2>
                              <h3>Danh sách vai trò</h3>
                         </div>
                         <div className='bodyRe__tableHeader__right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyRe__tableHeader__rightTwo'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                    </div>
                    <div className='bodyRe__search'>
                         <div className='bodyRe__searchTitle'>
                              <h1>Từ khoá</h1>
                         </div>
                         <div className='bodyRe__searchFrame'>
                              <input type='text' placeholder='Nhập từ khoá'/>
                              <span><AiOutlineSearch/></span>
                         </div>
                    </div>
                    <div className='bodyRe__add'>
                         <Link to={'/them-vai-tro'} className='bodyRe__addRole'>
                              <span><MdAddBox/></span>
                              <h1>Thêm vai trò</h1>
                         </Link>
                    </div>
                    <div className='bodyRe__form'>
                         <div className='bodyRe__formContent'>
                              <div className='bodyRe__formContent__one'>
                                   <ul>
                                        <li>
                                             <p>Tên vai trò</p>
                                        </li>
                                        <li>
                                             <p>Số người dùng</p>
                                        </li>
                                        <li>
                                             <p>Mô tả</p>
                                        </li>
                                        <li>
                                             <p>No</p>
                                        </li>
                                   </ul>
                              </div>
                              <div className='bodyRe__formContent__two'>
                                   <ul>
                                        <li>
                                             <p>Kế toán</p>
                                        </li>
                                        <li>
                                             <p>6</p>
                                        </li>
                                        <li>
                                             <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                                        </li>
                                        <li>
                                             <Link to={'/cap-nhat-vai-tro'}>
                                                  <p>Cập nhật</p>
                                             </Link>
                                        </li>
                                   </ul>
                              </div>
                              <div className='bodyRe__formContent__three'>
                                   <ul>
                                        <li>
                                             <p>Bác sĩ</p>
                                        </li>
                                        <li>
                                             <p>6</p>
                                        </li>
                                        <li>
                                             <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                                        </li>
                                        <li>
                                             <p>Cập nhật</p>
                                        </li>
                                   </ul>
                              </div>
                              <div className='bodyRe__formContent__four'>
                                   <ul>
                                        <li>
                                             <p>Lễ tân</p>
                                        </li>
                                        <li>
                                             <p>6</p>
                                        </li>
                                        <li>
                                             <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                                        </li>
                                        <li>
                                             <p>Cập nhật</p>
                                        </li>
                                   </ul>
                              </div>
                              <div className='bodyRe__formContent__five'>
                                   <ul>
                                        <li>
                                             <p>Quản lý</p>
                                        </li>
                                        <li>
                                             <p>6</p>
                                        </li>
                                        <li>
                                             <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                                        </li>
                                        <li>
                                             <p>Cập nhật</p>
                                        </li>
                                   </ul>
                              </div>
                              <div className='bodyRe__formContent__six'>
                                   <ul>
                                        <li>
                                             <p>Admin</p>
                                        </li>
                                        <li>
                                             <p>6</p>
                                        </li>
                                        <li>
                                             <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                                        </li>
                                        <li>
                                             <p>Cập nhật</p>
                                        </li>
                                   </ul>
                              </div>
                              <div className='bodyRe__formContent__seven'>
                                   <ul>
                                        <li>
                                             <p>Superadmin</p>
                                        </li>
                                        <li>
                                             <p>6</p>
                                        </li>
                                        <li>
                                             <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                                        </li>
                                        <li>
                                             <p>Cập nhật</p>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
    </section>
  )
}

export default Role