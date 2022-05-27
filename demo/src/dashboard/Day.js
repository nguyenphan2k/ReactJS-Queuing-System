import './Day.css'
import picture from '../images/Alta.png'
import {MdDashboard} from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {AiOutlineSetting} from 'react-icons/ai'
import {BiLayer} from 'react-icons/bi'
import {BiCamera} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import icon from '../images/Vector (3).png'
import iconf from '../images/Vector (4).png'
import iconfi from '../images/Vector (5).png'
import {IoIosArrowRoundUp} from 'react-icons/io'
import {IoIosArrowRoundDown} from 'react-icons/io'
import {MdArrowDropDown} from 'react-icons/md'
import bell from '../images/Vector.png'
import user from '../images/user.png'
function Day(){
     return(
          <section>
               <div className='contentBx'>
                    <div className='formBx'>
                         <img src={picture}/>
                         <form>
                              <div className='iconBx'>
                                   <menubar>
                                        <span><MdDashboard/></span>
                                        Dashboard
                                   </menubar>
                                   <menubar>
                                        <span><FiMonitor/></span>
                                        Thiết bị
                                   </menubar>
                                   <menubar>
                                        <span><BiMessageRoundedDots/></span>
                                        Dịch vụ
                                   </menubar>
                                   <menubar>
                                        <span><BiLayer/></span>
                                        Cấp số
                                   </menubar>
                                   <menubar>
                                        <span><HiOutlineDocumentReport/></span>
                                        Báo cáo
                                   </menubar>
                                   <menubar>
                                        <span><AiOutlineSetting/></span>
                                        Cài đặt hệ thống
                                   </menubar>
                                   
                              </div>
                              <div className='logoutBx'>
                                   <menubar>
                                        <span><FiLogOut/></span>
                                        Đăng xuất
                                   </menubar>
                              </div>
                         </form>
                    </div>
               </div>
               <div className='dashBx'>
                    <div className='boardBx'>
                         <div className='headerBx'>
                              <h1>Dashboard</h1>
                              <h2>Biểu đồ cấp số</h2>
                         </div>
                         <div className='footerBx'>
                              <div className='rectangleBx'>
                                   <span>
                                        <img src={icon}/>
                                   </span>
                                   <p>Số thứ tự đã cấp</p>
                                   <h1>4.221</h1>
                                   <div className='numBx'>
                                        <h4><IoIosArrowRoundUp /></h4>
                                        <h3>32.41%</h3>
                                   </div>
                              </div>
                              <div className='rectangleBx'>
                                   <span>
                                        <img src={iconfi}/>
                                   </span>
                                   <p>Số thứ tự đã sử dụng</p>
                                   <h1>3.721</h1>
                                   <div className='numBx'>
                                        <h4><IoIosArrowRoundDown /></h4>
                                        <h3>32.41%</h3>
                                   </div>
                              </div>
                              <div className='rectangleBx'>
                                   <span>
                                        <img src={icon}/>
                                   </span>
                                   <p>Số thứ tự đang chờ</p>
                                   <h1>468</h1>
                                   <div className='numBx'>
                                        <h4><IoIosArrowRoundUp /></h4>
                                        <h3>56.41%</h3>
                                   </div>
                              </div>
                              <div className='rectangleBx'>
                                   <span>
                                        <img src={iconf}/>
                                   </span>
                                   <p>Số thứ tự đã bỏ qua</p>
                                   <h1>32</h1>
                                   <div className='numBx'>
                                        <h4><IoIosArrowRoundDown /></h4>
                                        <h3>22.41%</h3>
                                   </div>
                              </div>
                         </div>
                         <div className='finalBx'>
                              <div className='firstBx'>
                                   <h1>Bảng thống kê theo ngày</h1>
                                   <p>Tháng 11/2021</p>
                                   <h2>Xem theo</h2>
                                   <div className='checkBx'>
                                        Ngày
                                        <span><MdArrowDropDown /></span>
                                   </div>
                              </div>
                              <div className='secondBx'>
                                   <ul>
                                        <li>6000</li>
                                        <li>5000</li>
                                        <li>4000</li>
                                        <li>3000</li>
                                        <li>2000</li>
                                        <li>1000</li>
                                        <li>0</li>
                                   </ul>
                              </div>
                              <div className='thirdthBx'>
                                   <ul>
                                        <li>01</li>
                                        <li>13</li>
                                        <li>19</li>
                                        <li>31</li>
                                   </ul>
                              </div>
                              <div className='fourthBx'>
                                   <ul>
                                        <li>sl</li>
                                        <li>/</li>
                                        <li>ngày</li>
                                   </ul>
                              </div>
                              <div className='fifthBx'>
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="#CEDDFF" fill-opacity="0.9" d="M0,295L24,256C48,224,96,160,144,112C192,64,240,32,288,
                                        21.3C336,11,384,21,432,58.7C480,96,528,160,576,160C624,160,672,96,720,58.7C768,21,816,11,864,26.7C912,
                                        43,960,85,1008,112C1056,139,1104,149,1152,128C1200,107,1248,53,1296,37.3C1344,21,1392,43,1416,53.3L1440,
                                        64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960
                                        ,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,
                                        320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z">
                                        </path>
                                   </svg>
                              </div>
                         </div>
                    </div>
               </div>
               <div className='userBx'>
                    <div className='infoBx'>
                         <div className='rightBx'>
                              <img src={bell}/>
                         </div>
                         <div className='rightBX'>
                              <img src={user}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='generalBx'>
                              <h1>Tổng quan</h1>
                         </div>
                    </div>
               </div>
          </section>
     )
}
export default Day