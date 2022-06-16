import './Error.css'
import React from 'react'
import logo from '../images/Screenshot_39.jpg'
import image from '../images/Screenshot_40.jpg'
import {Link} from 'react-router-dom'
function Error(){
     return(
          <section>
               <div className='contentFr'>
                    <div className='formFr'>
                         <img src={logo}/>
                         <form>
                              <div className='titleFr'>
                                   <h1>Đặt lại mật khẩu</h1>
                              </div>
                              <div className='contextFr'>
                                   <p>Vui lòng nhập email để đặt lại mật khẩu của bạn*</p>
                              </div>
                              <div className='inputFr'>
                                   <input type='text'/>
                              </div>
                              <div className='buttonFr'>
                                   <button>Huỷ</button>
                              </div>
                              <Link to={'/tiep-tuc'} className='buttonFr'>
                                   <button type='sumbit'>Tiếp tục</button>
                              </Link>
                         </form>
                    </div>
               </div>
               <div className="imgBx">
                    <img src={image}/>
               </div>
          </section>
     )
}
export default Error