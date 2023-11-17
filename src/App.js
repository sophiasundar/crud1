import './App.css';
import Navbar from './Components/navBar';
import UserList from './Components/userList';
import AddUser from './Components/addUser';
import Navbarlink from './Components/navBarLink';
import { useState } from 'react';
import { allUser } from './Components/allUser';
import { Route, Routes } from 'react-router';
import EditUser from './Components/editUser';
import NotFound from './Components/notFound';
function App() {
   const [userList,setuserList] = useState(allUser)


  return (
    <div className="App">
      {/* <Navbar/>  */}
      <Navbarlink/>
      
      <Routes>
                 {/* <UserList userList={userList} />  */}
        <Route exact path= "/" element= {<UserList userList={userList} />}/>
                   {/* <AddUser setuserList={setuserList} userList={userList} /> */}
        <Route exact path= "/adduser" element= {<AddUser setuserList={setuserList} userList={userList} />}/>
       
        <Route exact path= "/edituser" element= {<EditUser/>}/>
 
        <Route path='*' element = {<NotFound/>}/>

      
      </Routes>
   
   
    </div>
  );
}

export default App;
