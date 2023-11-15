// make it as edit proflie



import {  useNavigate, useParams } from "react-router-dom"



const profile=({userList})=>{

    const navigate = useNavigate();
    const {id}=useParams()
    const User = userList[id]


       return(
        <div>
         <nav class="navbar navbar-light bg-light">
         <span class="navbar-brand mb-0 h1">Profile</span>
         </nav>
         <div>
            <h1>profile-{id}</h1>


            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
         </div>
        
        </div>
       )
}

export default profile;