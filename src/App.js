import './App.css';
import Navbar from './Components/navBar';
import UserList from './Components/userList';
import AddUser from './Components/addUser';
import Navbarlink from './Components/navBarLink';
import { useState } from 'react';
import { allUser } from './Components/allUser';

function App() {
   const [userList,setuserList] = useState(allUser)


  return (
    <div className="App">
      <Navbarlink/>
      <Navbar/>
      <UserList userList={userList} /> 
      <AddUser setuserList={setuserList} userList={userList} />
    </div>
  );
}

export default App;
