import './Login.css'
import pictures from '../images/Alta.png'
import logos from '../images/Screenshot_37.jpg'
import { Link } from 'react-router-dom'
function Login(){
     return (
          <section>
               <div className="contentBx">
                    <div className='formBx'>
                         <img src={pictures}/>
                         <form>
                              <div className='inputBx'>
                                   <span>Tên đăng nhập *</span>
                                   <Link to={'/sai-tai-khoan'}>
                                        <input type='text' placeholder='lequynhaivan01'></input>
                                   </Link>
                              </div>
                              <div className='inputBx'>
                                   <span>Mật khẩu *</span>
                                   <input type='password' placeholder='password'></input>
                              </div>
                              <div>
                                   <Link to={'/quen-mat-khau'} className='rememberLx'>
                                        <h1>Quên mật khẩu?</h1>
                                   </Link>
                              </div>
                              <div>
                                   <Link to={'/dash-board'} className='inputBX'>
                                        <button>Đăng nhập</button>
                                   </Link> 
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