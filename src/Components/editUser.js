import * as React from 'react';
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const EditUser=()=>{
        const [user,setUser]=useState(null)
        const {id}=useParams()
        //  console.log(id)
        
        const getUser=()=>{
          fetch(`https://655b7db6ab37729791a9329c.mockapi.io/usercrud/${id}`)
          .then((data)=>data.json())
          .then((res)=>setUser(res))
         }  
        useEffect(()=> getUser(),[])

           return(
            <> 
             {user? <EditUserForm user={user}/>: "Loading...."    }
            </>
           )
          }
  



const EditUserForm = ({user})=>{
    console.log(user)
     const [name,setName] = useState(user.name)
     const [pic,setPic] = useState(user.pic)
     const [email,setEmail] = useState(user.email)
     const [phone,setPhone] = useState(user.phone)
     const navigate = useNavigate()
     

     

     const updateUser=(id)=>{
      const user= {
          name: name,
                pic,
                email,
                phone
        }
          console.log(user)

          fetch(`https://655b7db6ab37729791a9329c.mockapi.io/usercrud/${id}`,{
            method:"PUT",
            body:JSON.stringify(user),
            headers:{
              "Content-Type":"application/json"
            }
          }).then(()=>navigate('/'))
     }
    return(
      <>
         <Box
      sx={{ width: "100%"}}>
     
      <TextField 
         sx={{ width: "50%", margin:"3% 25% 2% 25%"}}
      id="outlined-basic" label="Edit Name: " variant="outlined" 
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
       />

      <TextField 
        sx={{ width: "50%", margin: "0% 25% 2% 25%"}} 
      id="outlined-basic" label="Edit Image: Give As Image Link" variant="outlined" 
        value={pic}
        onChange={(e)=>{
          setPic(e.target.value)
        }}
      />

      <TextField 
         sx={{ width: "50%", margin: "0% 25% 2% 25%"}}
      id="outlined-basic" label="Edit Email:" variant="outlined" 
       value={email}
       onChange={(e)=>{
        setEmail(e.target.value)
      }}
      />
      <TextField 
         sx={{ width: "50%", margin: "0% 25% 2% 25%"}}
      id="outlined-basic" label="Edit Phone:" variant="outlined" 
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
                updateUser(user.id)
             }}
       >Update Profile</Button>  

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

