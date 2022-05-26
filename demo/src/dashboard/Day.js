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
                              </div>
                              <div className='rectangleBx'>
                                   <span>
                                        <img src={iconfi}/>
                                   </span>
                                   <p>Số thứ tự đã cấp</p>
                              </div>
                              <div className='rectangleBx'>
                                   <span>
                                        <img src={icon}/>
                                   </span>
                                   <p>Số thứ tự 
                                        đã cấp</p>
                              </div>
                              <div className='rectangleBx'>
                                   <span>
                                        <img src={iconf}/>
                                   </span>
                                   <p>Số thứ tự đã cấp</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className='userBx'>
                    <div className='infoBx'></div>
               </div>
          </section>
     )
}
export default Day