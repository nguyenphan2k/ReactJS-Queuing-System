import './Login.css';
import logo from '../images/Screenshot_39.jpg'

function Login(){
     return (
          <div className="Login">
               <form action="" className="form">
                    <img src={logo}/>
                    <label className="name">Tên đăng nhập *</label>
                    <input type="text" name="Tên đăng nhập" value="lequynhaivan01" className="box"/>
                    <label className="name">Mật khẩu *</label>
                    <input type="password" name="Mật khẩu" value="password" className="box"/>
                    <label className="forget">Quên mật khẩu</label>
                    <button className="button">Đăng nhập</button>
               </form>
          </div>
     )
}
export default Login