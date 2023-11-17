import * as React from 'react';
// import Navbarlink from "./navBarLink";
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

    
    
    const NotFound=()=>{
        const navigate = useNavigate()
        return(
            <>
            {/* <Navbarlink/> */}
            
            <div >
                <br/><br/><br/><br/>
            <img src="https://media.istockphoto.com/photos/page-not-found-picture-id181100994?k=6&m=181100994&s=612x612&w=0&h=Me6FWryed37rdk3c-0LqZZFTFsYSu7iKJn-s_G7OYXw=" alt=""/>
            </div>
            <br/><br/><br/><br/>


            <div>
            <Button sx={{marginLeft:"-150%", marginTop:"850%", width: "10%"}}  
               variant="contained"
                   onClick={()=>{
                    navigate('/')
                  }}
                   >Back</Button>
                   </div>
            </>
            )
        }

export default NotFound;    
         