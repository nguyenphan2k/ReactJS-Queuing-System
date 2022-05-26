import './ConfirmPass.css'
import logo from '../images/Screenshot_39.jpg'
import image from '../images/Screenshot_40.jpg'

function ConfirmPass(){
     return(
          <section>
               <div className="contentBx">
                    <div className='formBx'>
                         <img src={logo}/>
                         <form>
                              <div className='titleFr'>
                                   <h1>Đặt lại mật khẩu mới</h1>
                              </div>
                              <div className='inputBx'>
                                   <span>Mật khẩu</span>
                                   <input type='password' value='password'></input>
                              </div>
                              <div className='inputBx'>
                                   <span>Nhập lại mật khẩu</span>
                                   <input type='password' value='password'></input>
                              </div>
                              <div className='inputBX'>
                                   <input  type='submit' value='Xác nhận' name=''/>
                              </div>
                         </form>
                    </div>
               </div>
               <div className="imgBx">
                    <img src={image}/>
               </div>
          </section>
     )
}
export default ConfirmPass