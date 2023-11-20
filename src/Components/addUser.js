import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const AddUser = ({setuserList,userList})=>{
     const [name,setName] = useState("")
     const [pic,setPic] = useState("")
     const [email,setEmail] = useState("")
     const [phone,setPhone] = useState("")
     const navigate = useNavigate()
    return(
      <>
         <Box
      sx={{ width: "100%"}}>
     
      <TextField 
         sx={{ width: "50%", margin:"3% 25% 2% 25%"}}
      id="outlined-basic" label="Name: " variant="outlined" 
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
       />

      <TextField 
        sx={{ width: "50%", margin: "0% 25% 2% 25%"}} 
      id="outlined-basic" label="Image: Give As Image Link" variant="outlined" 
        value={pic}
        onChange={(e)=>{
          setPic(e.target.value)
        }}
      />

      <TextField 
         sx={{ width: "50%", margin: "0% 25% 2% 25%"}}
      id="outlined-basic" label="Email:" variant="outlined" 
       value={email}
       onChange={(e)=>{
        setEmail(e.target.value)
      }}
      />
      <TextField 
         sx={{ width: "50%", margin: "0% 25% 2% 25%"}}
      id="outlined-basic" label="Phone:" variant="outlined" 
        value={phone}
        onChange={(e)=>{
          setPhone(e.target.value)
        }}
      />
     </Box>
       
      <Stack direction="row" spacing={2}>
        
      <Button sx={{marginRight:"200%"}} 
       variant="contained"
       onClick={()=>{
          const user= {
            name: name,
                  pic,
                  email,
                  phone
          }
            console.log(user)
            setuserList([...userList,user])
            console.log(userList)
       }}
       >Add User</Button>  

      <Button sx={{marginLeft:"-50%", width: "8.5%"}}  
       variant="contained"
        onClick={()=>{
           navigate('/')
        }}
       >Back</Button>
      
      </Stack>
       
            

      </>
    )


} 

export default AddUser;