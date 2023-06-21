import React from 'react';
import './UserTable.css';
import { AiOutlinePlus } from "react-icons/ai";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import BlockIcon from '@mui/icons-material/Block';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadIcon from '@mui/icons-material/Download';
import ModalInput from '../ModalInput/ModalInput';
import { DataGrid } from '@mui/x-data-grid'






class UserTable extends React.Component  {
    constructor() {
        super();
        this.handleUserSelection=this.handleUserSelection.bind(this);
        this.state = {
            rowSelected:0,
            open:false,
            item:{},
            email_f:'',
            user_f:'',
            status_f:'any',
            date_f:'',
            row_selected_Items:[]
          
        };
        this.handleEdit_AddUser=this.handleEdit_AddUser.bind(this);
        this.state.users = JSON.parse( localStorage.getItem('users') );
        if(!this.state.users){
          this.state.users=[];
        }

        this.handleClose=this.handleClose.bind(this);
        this.handleOpen=this.handleOpen.bind(this);
        this.personnames=[];
        this.row_selected=0;
        this.colors=[
          '#2e5456',
            '#d5398b',
            '#5200cc',
            '#e26b0a',
            '#07ecb0',
            '#ccff66',
            '#fc1208',
            '#963634',
            '#2e5456',
            '#d5398b',
            '#5200cc',
            '#e5e4d8'

        ];
        
  
       
        

      }
      _getRandomColor(){
        const item = this.colors[Math.floor(Math.random()*this.colors.length)];
        return item;
        
    } 
handleOpen(){
  this.setState({open:true});
}
handleClose(){
  this.setState({open:false});

}
handleUserSelection(value){
this.setState({item:value});
} 
handleEdit_AddUser(user){
  if(this.state.edit===false){

   var temp= [...this.state.users];
    var id;
    
    if(temp.length===0){
      id=0;
    }
    else{
      id=temp[temp.length-1].id +1;
    }
    user.id=id;
    user.color=this._getRandomColor();
    var date=(new Date().toLocaleString() + "").split(',');
    user.created_on=date[0];
    
    
   temp.push(user);
   
      this.setState({users:temp});
      localStorage.setItem( 'users', JSON.stringify(temp) );
      alert('User Added');
  }
  else{
    alert('User edited');
   
    var users=[...this.state.users];
    console.log(user);
    for (let index = 0; index < users.length; index++) {
      if(user.id===users[index].id){
        users.splice(index,1,user);
      
      }
      
    }
    console.log(users);
    this.setState({users:users});
    localStorage.setItem( 'users', JSON.stringify(users) );

  }
  this.handleClose();
 
}




  render() {
   
    const columns = [

      {
        field: "Name",
        headerName: "Name",
        width: 180,
        align:'left',
        renderCell: (params) => {
        
          var x=params.row.fullName;
          var arr=x.split('.');
     
       
       
          return (
            <>
            <div className='d-flex align-items-center'>
              <div className='avatar mr-5' style={{backgroundColor:params.row.color}}>{arr[0].substring(0, 1)}{arr.length>1?arr[1].substring(0, 1):arr[0].substring(0, 1)}</div>
              <div className='mr-5'>{arr.length >1 ?arr[0]:arr[0]}</div>
              <div>{arr.length>1 ?arr[1]:arr[0]}</div>
              </div>
            </>
          );
        }
      },      
        {
           field: 'UserName', 
           headerName: 'User Name', 
           width: 180,
           align:'left'
       },
        { field: 'Email', headerName: 'Email', width: 180 },
        {
          field: 'group',
          headerName: 'Group',
          type: 'singleSelect',
          valueOptions: ['Office', 'Managers', 'Head Office'],
          width: 90,
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'singleSelect',
          valueOptions: ['Locked', 'Active', 'Inactive'],
          width: 90,
          cellClassName:'fw-700'
        },
        {
          field: 'created_on',
          headerName: 'Created on',
          type: 'singleSelect',
         
          width: 90,
        },
   
      ];
   
     
      const handleRowClick = (params) => {
        this.setState({item:params.row});
           this.handleOpen();
           this.setState({edit:true})  ;
 
       };
       const filterdRows =() =>{
        var temp=[...this.state.users];
        console.log(temp);
        
         temp=  temp.filter((item)=>{
          
           if(item.Email?.includes(this.state.email_f) && item.UserName?.includes(this.state.user_f) && (this.state.status_f==='any'? true:item.status?.includes(this.state.status_f) ) && item.created_on?.includes(this.state.date_f) ){
            
            return true;
           }
           else{
            return false;
           }
              
          });
          return temp;
        
   
       };
       
      
  return (
    
    <div className='container users_table_container'>
        <div className='row m-0 pb-4'>
            <div className='col-md-6'>
                <h3>User Management</h3>
            </div>
            <div className='col-md-6 d-flex justify-content-end'>
                    <button onClick={()=>{
                      this.handleOpen();
                      this.setState({item:{}});
                      this.setState({edit:false})  ;
                
                    }} className='add_user'>
                        <AiOutlinePlus size={20} color='white'/>
                        Add New User
                    </button>
            </div>
        </div>
        <div className='row m-0 table_cont  '>
            <div className='col-md-12 d-flex align-items-center p-0 mb-4'>

            <TextField id="outlined-basic" variant="outlined"  size="small" 
                sx={{marginRight:1,width:200}}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon ></SearchIcon></InputAdornment>,
                    placeholder:'Search'
                  }}
                  onChange={(e)=>{
                    
                    this.setState({email_f:e.target.value});
                  
                  }}
            />
            <TextField id="outlined-basic" label="User Name" variant="outlined" size="small" 
                    sx={{marginRight:1,width:120}}

                    onChange={(e)=>{
                    
                      this.setState({user_f:e.target.value});
                    
                    }}
            />
                
                  <FormControl   sx={{marginRight:1,width:120}} >
                  <InputLabel id="demo-simple-select-label">User Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      value={this.state.status_f}
                        label="User Status"
                        size='small'
                        onChange={(e)=>{
                            this.setState({status_f:e.target.value});
                        }}
                    
                    >
                       <MenuItem selected  value={'any'} >Any</MenuItem>
                        <MenuItem value={"Active"}>Active</MenuItem>
                        <MenuItem value={"Inactive"}>Inactive</MenuItem>
                        <MenuItem value={"Locked"}>Locked</MenuItem>
                    </Select>
                  </FormControl>
                  <LocalizationProvider  dateAdapter={AdapterDayjs}>
                  
                        <DatePicker sx={{width:150,marginRight:1}}  slotProps={{ textField: { size: 'small' } }}  label="Creation Date" defaultValue={dayjs('2023-06-14')} 
                        
                        onChange={(newValue) =>{ 
                          var month=newValue.$M+1;
                          var day=newValue.$D;
                          var m;
                          var d;
                          if(month >=10){
                            m=''+month;
                          }
                          else{
                            
                            m=''+month;
                          }
                          if(day >=10){
                            d=''+day;
                          }
                          else{
                            d=''+day;
                          }
                        var string_date=m+'/'+d+'/'+newValue.$y;
                        console.log(string_date);
                        this.setState({date_f:string_date});


                        }}
                        />
                 
                    </LocalizationProvider>
                    <div className='filter_text'>filter All</div>
                  

            </div>
            <div className='row p-0 m-0'>
                <div className='col-md-9 p-0 mb-2'>
                    <div className='d-flex align-items-center'>
                            <div className='mr-5'> {this.state.rowSelected}</div>
                            <div>Selected</div>
                            <div className='vl'></div>
                            <div className='icon_wrapper '><CreateIcon  fontSize='20px' /></div>
                            <div className='icon_wrapper'><BlockIcon  fontSize='20px'
                             onClick={()=>{
                                if(this.state.row_selected_Items.length!==0){
                                  var temp=[...this.state.users];
                                 temp= temp.filter((item)=>item.id !== this.state.row_selected_Items[0]);
                                 console.log(this.state.item);
                                  this.setState({users:temp});
                                  localStorage.setItem( 'users', JSON.stringify(temp) );
                                  alert('user is deleted');
                                }
                                else{
                                  alert('Please Select User');
                                }
                            }}
                            /></div>
                            <div className='icon_wrapper'><LockIcon  fontSize='20px' /></div>
                            <div className='icon_wrapper'>Assign to Profile</div>
                            <div className='icon_wrapper'>Assign to Group</div>
                            <div className='icon_wrapper'><MoreVertIcon fontSize='20px' /></div>
                            <div className='unselect'>Unselect All</div>

                    </div>
                    
                </div>

                <div className='col-md-3 p-0 d-flex justify-content-end mb-2'>
                    <div className='icon_wrapper m-0'><DownloadIcon fontSize='20px' /></div>
                </div>
               
            </div>
            <div className='col-md-12 p-0'>
            <Box sx={{ height: 300 }}>
            <DataGrid
                rows={filterdRows()}
                columns={columns}
                  autoHeight={false}
                hideFooterPagination
                checkboxSelection
                sx={{fontSize:13}}
                rowHeight={80}
                hideFooterSelectedRowCount
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    this.setState({rowSelected:newRowSelectionModel.length ,row_selected_Items:newRowSelectionModel});
                    console.log(newRowSelectionModel);
                    
                  }}
                  onRowClick={handleRowClick} 
               
            
            />
            </Box>
            </div>

        </div>
       <ModalInput item={this.state.item} open={this.state.open} edit={this.state.edit} handleUserSelection={this.handleUserSelection} handleClose={this.handleClose} handleOpen={this.handleOpen}
       
       handleEdit_AddUser={this.handleEdit_AddUser}
       />
    </div>
  );
  }
}

export default UserTable;