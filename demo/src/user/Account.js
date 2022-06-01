import './Account.css'
import photo from '../images/Alta.png'
import user from '../images/user.png'
import {MdDashboard} from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {AiOutlineSetting} from 'react-icons/ai'
import {BiLayer} from 'react-icons/bi'
import {BiCamera} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import ring from '../images/Vector.png'
function Account(){
     return(
          <section>
               <div className='contentBx'>
                    <div className='formBx'>
                         <img src={photo}/>
                              <div className='iconBx'>
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
                                   <menubar>
                                        <span><FiLogOut/></span>
                                        Đăng xuất
                                   </menubar>
                              </div>
                    </div>
               </div>
               <div className='userBx'>
                    <div className='frameBx'>
                         <div className='headerBx'>
                              <label>Thông tin cá nhân</label>
                         </div>
                         <div className='rightBx'>
                              <img src={ring}/>
                         </div>
                         <div className='rightBX'>
                              <img src={user}/>
                              <h1>Xin chào</h1>
                              <h2>Lê Quỳnh Ái Vân</h2>
                         </div>
                         <div className='bodyBx'>
                              <div className='testBx'>
                                   <img src={user}/>
                                   <label>Lê Quỳnh Ái Vân</label>
                                   <form>
                                        <div className='inputBX'>
                                             <div className='inputBx'>
                                                  <span>Tên người dùng</span>
                                                  <input type='text' value='Lê Quỳnh Ái Vân'></input>
                                             </div>
                                             <div className='inputBx'>
                                                  <span>Số điện thoại</span>
                                                  <input type='text' value='0767375921'></input>
                                             </div>
                                             <div className='inputBx'>
                                                  <span>Email:</span>
                                                  <input type='text' value='adminSSO1@domain.com'></input>
                                             </div>
                                        </div>
                                        <div className='inputBX'>
                                             <div className='inputBx'>
                                                  <span>Tên đăng nhập</span>
                                                  <input type='text' value='lequynhaivan01'></input>
                                             </div>
                                             <div className='inputBx'>
                                                  <span>Mật khẩu</span>
                                                  <input type='text' value='311940211'></input>
                                             </div>
                                             <div className='inputBx'>
                                                  <span>Vai trò</span>
                                                  <input type='text' value='Kế toán'></input>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}
export default Account