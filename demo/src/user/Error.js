import './Error.css'
import logo from '../images/Screenshot_39.jpg'
import logos from '../images/Screenshot_37.jpg'
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
                              <div className='buttonFr'>
                                   <button>Tiếp tục</button>
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
export default Error