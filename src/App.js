import './App.css';
import Navbar from './Components/navBar';
import UserList from './Components/userList';
import AddUser from './Components/addUser';
import Navbarlink from './Components/navBarLink';
import { useState } from 'react';
import { allUser } from './Components/allUser';
import { Navigate, Route, Routes } from 'react-router';
import EditUser from './Components/editUser';
import NotFound from './Components/notFound';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function App() {
   const [userList,setuserList] = useState(allUser)
   const [mode,setMode]=useState("light")
   const theme = createTheme({
    palette: {
      mode: mode,
    },
  });


  return (
    <div className="App">
      {/* <Navbar/>  */}
      <ThemeProvider theme={theme}>
       
      <Navbarlink mode={mode} setMode={setMode} />
      
      <Routes>
                 {/* <UserList userList={userList} />  */}
        <Route exact path= "/" element= {<UserList userList={userList} />}/>
                   {/* <AddUser setuserList={setuserList} userList={userList} /> */}
        <Route exact path= "/adduser" element= {<AddUser setuserList={setuserList} userList={userList} />}/>
       
        <Route exact path= "/edituser" element= {<EditUser/>}/>
 
        <Route path="/404" element={<NotFound/>}/>
        <Route path='*' element = {<Navigate replace to='/404'/>}/>

      
      </Routes>
   
      </ThemeProvider>
   
    </div>
  );
}

export default App;
