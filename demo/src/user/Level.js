import './Level.css'
import React from 'react'
import picture from '../images/Alta.png'
import {MdDashboard} from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {BiLayer} from 'react-icons/bi'
import {AiOutlineSetting} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import rings from '../images/Vector.png'
import users from '../images/user.png'
import arrows from '../images/Vector (12).png'
import {MdArrowDropDown} from 'react-icons/md'
import {BsCalendarDay} from 'react-icons/bs'
import {MdArrowRight} from 'react-icons/md'
import {useState, useEffect} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdArrowDropleft} from 'react-icons/io'
import {IoMdArrowDropright} from 'react-icons/io'
import {SiAddthis} from 'react-icons/si'
function Level() {
     const [day, setDay] = useState(1)

     useEffect(() => {
          setInterval(() => {
               setDay(pre => pre)
          }, 1000);
     }, []);

  return (
    <section>
          <div className='dashUs'>
                    <div className='dashUs__form'>
                         <div className='dashUs__formImage'>
                              <img src={picture}/>
                         </div>
                         <div className='dashUs__formIcon'>
                              <ul>
                                   <li>
                                        <div>
                                             <Link to={'/man-hinh-chinh'}>
                                                  <span><MdDashboard/></span>
                                                  <p>Dashboard</p>
                                             </Link>
                                        </div>
                                   </li>
                                   <li>
                                        <div>
                                             <Link to={'/thiet-bi'}>
                                                  <span><FiMonitor/></span>
                                                  <p>Thi???t b???</p>
                                             </Link>
                                        </div>
                                   </li>
                                   <li>
                                        <div>
                                             <Link to={'/dich-vu'}>
                                                  <span><FiMonitor/></span>
                                                  <p>D???ch v???</p>
                                             </Link>
                                        </div>
                                   </li>
                                   <li>
                                        <div>
                                             <Link to={'/cap-so'}>
                                                  <span><BiLayer/></span>
                                                  <p>C???p s???</p>
                                             </Link>
                                        </div>
                                   </li>
                                   <li>
                                        <div>
                                             <Link to={'/bao-cao'}>
                                                  <span><HiOutlineDocumentReport/></span>
                                                  <p>B??o c??o</p>
                                             </Link>
                                        </div>
                                   </li>
                                   <li>
                                        <div>
                                             <Link to={'/cai-dat-he-thong'}>
                                                  <span><AiOutlineSetting/></span>
                                                  <p>C??i ?????t h??? th???ng</p>
                                             </Link>
                                        </div>
                                   </li>
                              </ul>
                         </div>
                         <div className='dashUs__formLogout'>
                              <ul>
                                   <li>
                                        <span><FiLogOut/></span>
                                        <p>????ng xu???t</p>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
{/*------------------------------------------------------------*/}
               <div className='bodyLx'>
                    <div className='bodyLx__header'>
                         <div className='bodyLx__headerInfo'>
                              <h1>C???p s???</h1>
                              <ul>
                                   <li><img src={arrows}/></li>
                              </ul>
                              <h2>Danh s??ch c???p s???</h2>
                         </div>
                         <div className='bodyLx__headerInfo__right'>
                              <img src={rings}/>
                         </div>
                         <div className='bodyLx__headerInfo__rightTwo'>
                              <img src={users}/>
                              <h1>Xin ch??o</h1>
                              <h2>L?? Qu???nh ??i V??n</h2>
                         </div>
                         <div className='bodyLx__headerInfo__title'>
                              <h1>Qu???n l?? c???p s???</h1>
                         </div>
                    </div>
{/*----------------------------------------------------------*/}
                    <div className='bodyLx__form'>
                         <div className='bodyLx__formStatus'>
                              <h1>T??n d???ch v???</h1>
                         </div>
                         <div className='bodyLx__formStatus__all'>
                              <div className='bodyLx__formStatus__allOne'>
                                   <h1>T???t c???</h1>
                                   <span><MdArrowDropDown/></span>
                              </div>
                         </div>
                         {/*--------------------------*/}
                         <div className='bodyLx__formStatus__next'>
                              <h1>T??nh tr???ng</h1>
                         </div>
                         <div className='bodyLx__formStatus__nextAll'>
                              <div className='bodyLx__formStatus__nextAll__one'>
                                   <h1>T???t c???</h1>
                                   <span><MdArrowDropDown/></span>
                              </div>
                         </div>
                         {/*--------------------------*/}
                         <div className='bodyLx__formSource__next'>
                              <h1>Ngu???n c???p</h1>
                         </div>
                         <div className='bodyLx__formSource__nextAll'>
                              <div className='bodyLx__formSource__nextAll__one'>
                                   <h1>T???t c???</h1>
                                   <span><MdArrowDropDown/></span>
                              </div>
                         </div>
                         {/*--------------------------*/}
                         <div className='bodyLx__formCalender'>
                              <div className='bodyLx__formCalender__time'>
                                   <h1>Ch???n th???i gian</h1>
                              </div>
                              <div className='bodyLx__formCalender__next'>
                                   <div className='bodyLx__formCalender__nextOne'>
                                        <span><BsCalendarDay/></span>
                                        <h1>{day}/10/2021</h1>
                                   </div>
                                   <div className='bodyLx__formCalender__nextTwo'>
                                        <span><MdArrowRight/></span>
                                   </div>
                                   <div className='bodyLx__formCalender__nextThree'>
                                        <span><BsCalendarDay/></span>
                                        <h1>18/10/2021</h1>
                                   </div>
                              </div>
                         </div>
                         {/*--------------------------*/}
                         <div className='bodyLx__formKey'>
                              <div className='bodyLx__formKey__title'>
                                   <h1>T??? kho??</h1>
                              </div>
                              <div className='bodyLx__formKey__search'>
                                   <input placeholder='Nh???p t??? kho??'></input>
                                   <span><AiOutlineSearch/></span>
                              </div>
                         </div>
                         {/*--------------------------*/}
                         <div className='bodyLx__formAdd'>
                              <div className='bodyLx__formAdd__level'>
                                   <Link to={'/them-cap-so'} className='bodyLx__formAdd__levelClick'>
                                        <span><SiAddthis/></span>
                                        <h1>C???p s??? m???i</h1>
                                   </Link>
                              </div>
                         </div>
                    </div>
                    {/*---------------------------------------------*/}
                    <div className='bodyLx__table'>
                         <div className='bodyLx__tableForm'>
                              <div className='bodyLx__tableForm__count'>
                                   <ul>
                                        <li>STT</li>
                                        <li>T??n kh??ch h??ng</li>
                                        <li>T??n d???ch v???</li>
                                        <li>Th???i gian C???p</li> 
                                        <li>H???n s??? d???ng</li>
                                        <li>Tr???ng th??i</li>
                                        <li>Ngu???n c???p</li> 
                                        <li>No</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countOne'>
                                   <ul>
                                        <li>2010001</li>
                                        <li>L?? Hu???nh ??i V??n</li>
                                        <li>Kh??m tim m???ch</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>??ang ch???</p>
                                        </li> 
                                        <li>Kiosk</li>
                                        <li>
                                             <div>
                                                  <Link to={'/chi-tiet-cap-so'}>
                                                       Chi ti???t
                                                  </Link>
                                             </div>
                                        </li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countTwo'>
                                   <ul>
                                        <li>2010002</li>
                                        <li>Hu???nh ??i V??n</li>
                                        <li>Kh??m s???n - Ph??? Khoa</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>???? s??? d???ng</p>
                                        </li> 
                                        <li>Kiosk</li>
                                        <li>Chi ti???t</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countThree'>
                                   <ul>
                                        <li>2010003</li>
                                        <li>L?? ??i V??n</li>
                                        <li>Kh??m r??ng h??m m???t</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>??ang ch???</p>
                                        </li> 
                                        <li>H??? th???ng</li>
                                        <li>Chi ti???t</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countFour'>
                                   <ul>
                                        <li>2010004</li>
                                        <li>Nguy???n ??i V??n</li>
                                        <li>Kh??m tai m??i h???ng</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>??ang ch???</p>
                                        </li> 
                                        <li>H??? th???ng</li>
                                        <li>Chi ti???t</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countFive'>
                                   <ul>
                                        <li>2010005</li>
                                        <li>Tr???n Th??? ??i V??n</li>
                                        <li>Kh??m h?? h???p</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>??ang ch???</p>
                                        </li> 
                                        <li>Kiosk</li>
                                        <li>Chi ti???t</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countSix'>
                                   <ul>
                                        <li>2010006</li>
                                        <li>L?? Hu???nh Ngh??a</li>
                                        <li>Kh??m m???t</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>???? s??? d???ng</p>
                                        </li> 
                                        <li>H??? th???ng</li>
                                        <li>Chi ti???t</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countSeven'>
                                   <ul>
                                        <li>2010007</li>
                                        <li>L?? Hu???nh ?????c</li>
                                        <li>Kh??m ti??u ho??</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>???? s??? d???ng</p>
                                        </li> 
                                        <li>Kiosk</li>
                                        <li>Chi ti???t</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countEight'>
                                   <ul>
                                        <li>2010008</li>
                                        <li>Ph???m V??n M???nh</li>
                                        <li>Kh??m t???ng qu??t</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>B??? qua</p>
                                        </li> 
                                        <li>H??? th???ng</li>
                                        <li>Chi ti???t</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__countNine'>
                                   <ul>
                                        <li>2010009</li>
                                        <li>L?? Th??? C???m Ti??n</li>
                                        <li>Kh??m da li???u</li>
                                        <li>14:35 - 07/11/2021</li> 
                                        <li>14:35 - 12/11/2021</li>
                                        <li>
                                             <span>.</span>
                                             <p>???? s??? d???ng</p>
                                        </li> 
                                        <li>H??? th???ng</li>
                                        <li>Chi ti???t</li>
                                   </ul>
                              </div>
                              <div className='bodyLx__tableForm__increase'>
                                   <div className='bodyLx__tableForm__increaseNumber'>
                                        <ul>
                                             <li>
                                                  <p><IoMdArrowDropleft/></p>
                                             </li>
                                             <li>
                                                  <p>1</p>
                                             </li>
                                             <li><p>2</p></li>
                                             <li><p>3</p></li>
                                             <li><p>4</p></li>
                                             <li><p>5</p></li>
                                             <li><p>...</p></li>
                                             <li><p>10</p></li>
                                             <li>
                                                  <p><IoMdArrowDropright/></p>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
    </section>
  )
}

export default Level