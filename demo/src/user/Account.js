import './Account.css'
import picture from '../images/Alta.png'
function Account(){
     return(
          <section>
               <div className='contentBx'>
                    <div className='formBx'>
                         <img src={picture}/>
                         <form>
                              <div className='iconBx'>
                                   <menubar>Dashboard</menubar>
                                   <menubar>Thiết bị</menubar>
                                   <menubar>Dịch vụ</menubar>
                                   <menubar>Cấp số</menubar>
                                   <menubar>Báo cáo</menubar>
                                   <menubar>Cài đặt hệ thống</menubar>
                              </div>
                              <div className='logoutBx'>
                                   <menubar>Đăng xuất</menubar>
                              </div>
                         </form>
                    </div>
               </div>
               <div className='userBx'>
                    <div className='frameBx'>
                         <div className='headerBx'>
                              <label>Thông tin cá nhân</label>
                         </div>
                         <div className='bodyBx'></div>
                    </div>
               </div>
          </section>
     )
}
export default Account