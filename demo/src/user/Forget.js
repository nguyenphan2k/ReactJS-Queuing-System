import './Forget.css'
import logo from '../images/Screenshot_39.jpg'
import logos from '../images/Screenshot_37.jpg'
import {Link} from 'react-router-dom'
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
                              <div className='rememberFr'>
                                   <label>Sai mật khẩu hoặc tên đăng nhập</label>
                              </div>
                              <div className='inputBX'>
                                   <button type='sumbit'>Đăng nhập</button>
                              </div>
                              <Link to={'/quen-mat-khau-tiep'} className='forgetFr'>
                                   <label>Quên mật khẩu</label>
                              </Link>
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