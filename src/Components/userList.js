import { allUser } from "./allUser"
import User from "./user"

const UserList = ( {userList})=>{
     console.log(userList)
    return(
    <>
    <div className = "App">
      {
        userList.map((element,index)=>
             {
            return <User  {...element} key ={index} />
             }
        )
      }
    </div>
    </>

    ) 
}

export default UserList