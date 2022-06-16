import './ConfirmPass.css'
import React from 'react'
import logo from '../images/Screenshot_39.jpg'
import image from '../images/Screenshot_40.jpg'
function ConfirmPass(){
     return(
          <section>
               <div className="contentBx">
                    <div className='formBx'>
                         <img src={logo}/>
                         <form>
                              <div className='titleFrC'>
                                   <h1>Đặt lại mật khẩu mới</h1>
                              </div>
                              <div className='inputBxC'>
                                   <span>Mật khẩu</span>
                                   <input type='password' value='password'></input>
                              </div>
                              <div className='inputBxC'>
                                   <span>Nhập lại mật khẩu</span>
                                   <input type='password' value='password'></input>
                              </div>
                              <div className='inputBXC'>
                                   <button>Xác nhận</button>
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