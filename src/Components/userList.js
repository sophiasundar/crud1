import { allUser } from "./allUser"
import User from "./user"

const UserList = ()=>{

    return(
    <>
    <div className = "App">
      {
        allUser.map((element,index)=>
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