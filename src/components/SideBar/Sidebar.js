import React from 'react';
import './SideBar.css';
import { AiOutlineSearch } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import {BiChevronDown } from "react-icons/bi";


class Sidebar extends React.Component  {
  render() {
  return (
    <div className='sidebar_container ' >
      <div className='container'>
        <div className='row m-0'>
          <div className='col-md-12 d-flex justify-content-center pb-1'>
              <div className='img-container'>
            <img src='https://th.bing.com/th/id/R.572e4f51d0a4d67669784df53026b5a7?rik=lv9i04y8yl33Dg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f3%2f33%2fVanamo_Logo.png&ehk=Ix3NOUWRAegY6L3gmUWwTNm0Gee%2faq3jB0ZwGhiKFRk%3d&risl=&pid=ImgRaw&r=0' alt='logo' className='img-fluid' />
            </div>
        
          </div>
          <div className='col-md-12 p-0'>
            <div className='input_wrapper '>
            <input placeholder='Quick Access'  />
            <AiOutlineSearch  color='darkgray' size={20}/>
            </div>
            <div className='d-flex align-items-center pt-3 pb-4'>
              <MdDashboard color='darkgray'size={20}/>
              <div className='main_title ml-5'>Dashboard</div>
              

            </div>
     </div>
     <div className='col-md-12 nav_settings p-0'>
            <div className='title pb-2'>SETTINGS</div>
          <div className='menu_item'>
            <div className='menu_title '>ATM Settings</div>
            <BiChevronDown size={30} />
          </div>
          <div className='menu_item'>
            <div className='menu_title '>Business Setup</div>
            <BiChevronDown size={30}  />
          </div>
          <div className='menu_item'>
            <div className='menu_title '>User Management</div>
            <BiChevronDown size={30}  />
          </div>
          <div className='main_title pt-2'>Licence Management</div>
     </div>
        
        </div>
        </div>
    </div>
  );
  }
}

export default Sidebar;