import React from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import Modal from '@mui/base/Modal';
import './ModalInput.css';
import { IoMdClose } from "react-icons/io";
import { useForm } from 'react-hook-form';



export default function ModalInput(props) {
 
 
    let openprop=props.open;
    
    const {register ,handleSubmit}=useForm();
   console.log(props.item);

const onSave=(formValues)=>{
  
  if(formValues.UserName?.length !==0 && formValues.Email?.length!==0 && formValues.fullName?.length !==0 && formValues.group?.length !==0 && formValues.status?.length !==0)    {
       
    props.handleEdit_AddUser({...formValues,id:props.item.id,color:props.item.color,created_on:props.item.created_on});
   

  }  
  else{
    alert('Please Complete All Fields');
  }

}

  return (
    <div>

      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={openprop}
        onClose={props.handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box sx={style}>
        <div className='modal_header '>
            <div className='container'>
                <div className='row align-items-center m-0'>
                    <div className='col-md-6 p-0'>
                        <h5 className='text-white'>Add New User</h5>
                    </div>
                    <div className='col-md-6 p-0 d-flex justify-content-end'>
                        <button className='close_btn ' onClick={props.handleClose}><IoMdClose size={30} color='white' /></button>
                    </div>
                </div>
            </div>
        </div>
        <div className='input_container'>
        <form onSubmit={handleSubmit(onSave)}>
            <div className='container'>
             
                <div className="form-group mb-4">
                        <label className='input_label' >Full Name</label>
                        <input type="text" placeholder='Enter full Name' className="form-control" {...register('fullName')} defaultValue={props.item.fullName}/>
                </div>
                <div className="form-group mb-4">
                        <label className='input_label'>User Name</label>
                        <input placeholder='Enter User Name' type="text" className="form-control"   {...register('UserName')} defaultValue={props.item.UserName}/>
                </div>
                <div className="form-group mb-4">
                        <label className='input_label'>Email Address</label>
                        <input placeholder='Enter user email address' type="email" className="form-control"   {...register('Email')} defaultValue={props.item.Email}/>
                </div>
                <div className="form-group mb-4">
                        <label className='input_label'>User Group</label>
                        <select className="form-select"  aria-label="Default select example"  {...register('group')} defaultValue={props.item.group? props.item.group:'0'} >
                                <option  disabled hidden value="0">Choose Use Group</option>
                                <option value="Office">Office</option>
                                <option value="Managers">Managers</option>
                                <option value="Head Office">Head Office</option>
                        </select>
                </div>
                <div className="form-group ">
                        <label className='input_label'>Assign Profile</label>
                        <select className="form-select"  aria-label="Default select example"  {...register('status')} defaultValue={props.item.status? props.item.status:'0'} >
                                <option disabled hidden value="0">Choose profile</option>
                                <option value="Locked">Locked</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                        </select>
                </div>
                
        </div>
        <hr />
        <div className='modal_footer'>
            <div className='container'>
        <div className='row align-items-center '>
            <div className='col-md-6 p-0'>
                <div className='reset'>Rest All Fields</div>
            </div>
            <div className='col-md-6 p-0 d-flex justify-content-end'>
                <button className='cancel_user'onClick={props.handleClose} >Cancel</button>
                <button className='add_user ' type='submit'>{props.edit ?'Edit':'Add'} User</button>
            </div>
        </div>
        </div>
        </div>
        </form>
        </div>
   
        </Box>
      </StyledModal>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};


const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 500,
  borderRadius: '8px',

  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});

