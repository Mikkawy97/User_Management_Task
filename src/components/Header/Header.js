import React from 'react';
import './header.css';
import {BsChevronLeft } from "react-icons/bs";
import {AiOutlineMenu } from "react-icons/ai";
import {AiOutlineQuestionCircle } from "react-icons/ai";
import {IoMdNotifications } from "react-icons/io";
class Header extends React.Component  {
  render() {
  return (
    <div className='header_wrapper mb-5'  >
    <div className='container '>
                <div className='row align-items-center m-0 '>
                    <div className='col-md-6'>
                            <div className='d-flex align-items-center'>
                                    <BsChevronLeft color='#585e74' size={20} />
                                    <AiOutlineMenu color='#585e74' size={20} className='mr-5'/>
                                    <div className='title'>Good Morning!</div>
                                    <div className='date_styles'>Tue Jan 12,2022 9:39 AM</div>
                                    
                            </div>
                    </div>
                    <div className='col-md-6 d-flex justify-content-end align-items-center'>
                    <AiOutlineQuestionCircle color='#585e74' size={25} className='mr-5'/>
                    <div className='notify_icon'>
                    <IoMdNotifications color='#585e74' size={25} className='mr-5 '/>
                    <div className='badge'>9+</div>
                    </div>
                    <div className='vl'></div>
                    <div className='user_name_styles mr-5'>Nada Amer</div>
                    <div className='user_name_ab mr-5'>NA</div>

              

              
                    </div>
                </div>
                </div>
    </div>
  );
  }
}

export default Header;