//  import {useNavigate} from 'react-router-dom'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const User =({name,pic,email,phone,id}) =>{

  // const navigate = useNavigate()

  return(
      <>
       <Card sx={{ width: "310px",marginBottom:"20px" }}>
          <CardHeader
               avatar={
                <Avatar aria-label="recipe">
                   {id}
                </Avatar>
              }
             title = {
              <Typography variant="h5">{name}</Typography>
            }
             />
                <CardMedia
              component="img"
              height="340"
              style={{objectFit:"fill"}}
              image={pic}
              alt={name}
            />
                 <CardContent>
          <Typography paragraph>Email: {email}</Typography>
          <Typography paragraph>Phone.no: {phone}</Typography>

        </CardContent>
      </Card>
      
      </>


    
     )
    }
export default User;