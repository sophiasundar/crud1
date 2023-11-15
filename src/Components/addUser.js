import { Box, TextField } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
// import {  }
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const AddUser = ({})=>{
     const [name,setName] = useState("")
     const [pic,setPic] = useState("")
     const [email,setEmail] = useState("")
     const [phone,setPhone] = useState("")
     const navigate = useNavigate()
    return(
      <>
        <Box sx={{width:"100%"}}>
          <TextField 
          sx={{width:"50%",margin:"3% 25% 2% 25%"}}        
          id="outlined-basic" label="Name" variant="outlined" 
          value={name}
          onChange={(e)=>{
              setName(e.target.value)
          }}/>
        
          <TextField 
          sx={{width:"50%",margin:"0% 25% 2% 25%"}}        
          id="outlined-basic" label="pic" variant="outlined" 
          value={pic}
          onChange={(e)=>{
              setPic(e.target.value)
          }}/>

          <TextField 
          sx={{width:"50%",margin:"0% 25% 2% 25%"}}        
          id="outlined-basic" label="email" variant="outlined" 
          value={email}
          onChange={(e)=>{
              setEmail(e.target.value)
          }}/>

          <TextField 
          sx={{width:"50%",margin:"0% 25% 2% 25%"}}        
          id="outlined-basic" label="phone" variant="outlined" 
          value={phone}
          onChange={(e)=>{
              setPhone(e.target.value)
          }}/>

        
        </Box>



        


      </>
    )


} 

export default AddUser;