import './Login.css';
import logo from '../images/Screenshot_39.jpg'
import logos from '../images/Screenshot_37.jpg'
import './Forget.js'
import { Link } from 'react-router-dom'
function Login(){
     return (
          <section>
               <div className="contentBx">
                    <div className='formBx'>
                         <img src={logo}/>
                         <form>
                              <div className='inputBx'>
                                   <span>Tên đăng nhập *</span>
                                   <input type='text' value='lequynhaivan01'></input>
                              </div>
                              <div className='inputBx'>
                                   <span>Mật khẩu *</span>
                                   <input type='password' value='password'></input>
                              </div>
                              <Link to={'/quen-mat-khau'} className='remember'>
                                   <h1>Quên mật khẩu?</h1>
                              </Link>
                              <div className='inputBX'>
                                   <button type='sumbit'>Đăng nhập</button>
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
export default Login