import { useEffect } from "react"
import { allUser } from "./allUser"
import User from "./user"
import { useState } from "react"
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom"
const UserList=()=>{
  const navigate = useNavigate()
  const [userList,setUserList]=useState([])
    // console.log(userList)
    const getUser=()=>{
      fetch("https://655b7db6ab37729791a9329c.mockapi.io/usercrud")
      .then((data)=>data.json())     
      .then((res)=>setUserList(res))

    }

    const deleteUser=(id)=>{
      fetch(`https://655b7db6ab37729791a9329c.mockapi.io/usercrud/${id}`, {method:"DELETE"}
      )
      .then((data)=>data.json())     
      .then((res)=>{getUser()})
    }

    // const editUser=(id)=>{
    //   fetch(`https://655b7db6ab37729791a9329c.mockapi.io/usercrud/${id}`, {method:"DELETE"}
    //   )
    //   .then((data)=>data.json())     
    //   .then((res)=>{getUser()})
    // }

    useEffect(()=>{
        getUser()
            },[])  

    // console.log(userList)
    return(
    <>
    <div className = "App">
      {
        userList.map((element,index)=>
           
             {
              // console.log(element.id)
            return <User  {...element} key ={index} 
             deleteButton={
              <IconButton aria-label="delete">
              <DeleteIcon 
               onClick={()=>{
                deleteUser(element.id)
               }}
              />
              </IconButton>
             } 
             editButton={ 
              <IconButton aria-label="delete" color="success">
              <EditIcon 
               onClick={()=>{
                navigate(`/edit/${element.id}`)
               }}
              />
              </IconButton> 

             } 
             />
          }
        )
      }
    </div>
    </>

    ) 
}

export default UserList