import React from 'react'
import './AddLevel.css'
import picture from '../images/Alta.png'
import {MdDashboard} from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {AiOutlineSetting} from 'react-icons/ai'
import {BiLayer} from 'react-icons/bi'
import {BiCamera} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import rings from '../images/Vector.png'
import users from '../images/user.png'
import arrows from '../images/Vector (12).png'
import {MdArrowDropDown} from 'react-icons/md'
function AddLevel() {
     const Click = document.getElementById('bodyAl__frameContain__popUp')

     const handleClick = () =>{
          alert(Click)
     }
  return (
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
                                             </Link>
                                        </div>
                                   </li>
                              </ul>
                         </div>
                         <div className='dashUs__formLogout'>
                              <ul>
                                   
                                   <li>
                                        <div>
                                             <Link to={'/thoat'}>
                                                  <span><FiLogOut/></span>
                                                  <p>Đăng xuất</p>
                                             </Link>
                                        </div>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
{/*------------------------------------------------------------*/}
               <div className='bodyAl'>
                    <div className='bodyAl__header'>
                         <div className='bodyAl__headerInfo'>
                              <h1>Cấp số</h1>
                              <ul>
                                   <li><img src={arrows}/></li>
                                   <li><img src={arrows}/></li>
                              </ul>
                              <h2>Danh sách cấp số</h2>
                              <h3>Cấp số mới</h3>
                         </div>
                         <div className='bodyAl__headerInfo__right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyAl__headerInfo__rightTwo'>
                              <img src={users}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='bodyAl__headerInfo__title'>
                              <h1>Quản lý cấp số</h1>
                         </div>
                    </div>
                    <div className='bodyAl__frame'>
                         <div className='bodyAl__frameContain'>
                              <div className='bodyAl__frameContain__name'>
                                   <h1>CẤP SỐ MỚI</h1>
                                   <h2>Dịch vụ khách hàng lựa chọn</h2>
                              </div>
                              <div className='bodyAl__frameContain__scroll'>
                                   <ul>
                                        <li>Chọn dịch vụ
                                             <div className='bodyAl__frameContain__scrollDown'>
                                                  <ul>
                                                       <li>Khám tim mạch</li>
                                                       <li>Khám sản - Phụ khoa</li>
                                                       <li>
                                                            Khám răng hàm mặt
                                                       </li>
                                                       <li>Khám tai mũi họng</li>
                                                  </ul>
                                             </div>
                                        </li>
                                        <li><MdArrowDropDown/></li>
                                   </ul>
                              </div>
                              <div className='bodyAl__frameContain__button'>
                                   <Link to={'/huy-cap-so'} className='bodyAl__frameContain__buttonCancel'>
                                        <button>Huỷ bỏ</button>
                                   </Link>
                                   <div className='bodyAl__frameContain__buttonPrint'>
                                        <button onClick={handleClick}>In số</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
    </section>
  )
}

export default AddLevel
