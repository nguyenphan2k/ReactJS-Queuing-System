import './Forget.css'
import logo from '../images/Screenshot_39.jpg'
import logos from '../images/Screenshot_37.jpg'
function Forget(){
     return (
          <section>
               <div className="contentBx">
                    <div className='formBx'>
                         <img src={logo}/>
                         <form>
                              <div className='inputBx'>
                                   <span>Tên đăng nhập *</span>
                                   <input type='text' value='Alvan288'></input>
                              </div>
                              <div className='inputBx'>
                                   <span>Mật khẩu *</span>
                                   <input type='password' value='password'></input>
                              </div>
                              <div className='remember'>
                                   <label>Sai mật khẩu hoặc tên đăng nhập</label>
                              </div>
                              <div className='inputBX'>
                                   <input  type='submit' value='Đăng nhập' name=''/>
                              </div>
                              <div className='forget'>
                                   <label>Quên mật khẩu</label>
                              </div>
                         </form>
                    </div>
               </div>
               <div className="imgBx">
                    <img src={logos}/>
               </div>
          </section>
     )
}
export default Forget