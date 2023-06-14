import React from 'react';
import './App.css';
import Sidebar from './components/SideBar/Sidebar';
import Header from './components/Header/Header';
import UserTable from './components/User_Table/UserTable';

class App extends React.Component  {
  render() {
  return (
    <div className='general_cont ' >
     <div className='row m-0'>
      <div className='col-md-2 p-0'>
      <Sidebar />
      </div>
      <div className='col-md-10 p-0'>
      <Header />
      <UserTable />

      </div>
     </div>
 
    
     
              
            
    </div>
  );
  }
}

export default App;
