import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';


    function Navbarlink(){
        const navigate =useNavigate()

            return(
                <>

                <Box sx={{ display: 'flex', marginBottom:"5%"}}>

                <CssBaseline />

                <AppBar component="nav">
                
                <Toolbar> 
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    nav
                </Typography>
                <Box sx={{display: { xs: 'none', sm: 'block' } }}>
                
                <Button variant="contained"
                     onClick={()=>{
                        navigate('/')
                      }}
                >Dashboard</Button>
                 {/* /adduser */}
                <Button variant="contained"
                    onClick={()=>{
                        navigate('/adduser')
                      }}
                >Add User</Button>

                <Button variant="contained"
                    onClick={()=>{
                        navigate('/edituser')
                      }}
                >Edit User</Button>
                </Box>
                </Toolbar>

                </AppBar>


                </Box>

                </>
            )
    }
export default Navbarlink;