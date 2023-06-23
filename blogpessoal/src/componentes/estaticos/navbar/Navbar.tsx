import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" style={{ backgroundColor: "#774c60" }}>
                    <Box className='cursor' >
                        <Typography variant="h5" style={{ color: "lightgrey" }}>
                            BlogPessoal
                        </Typography>
                    </Box>

                    
                        <Box display="flex" justifyContent="start">
                        <Link to='/Sobre'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "lightgrey" }}>
                                    Sobre
                                </Typography>
                            </Box>
                            <Box />
                            </Link>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "lightgrey" }}>
                                    Postagens
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "lightgrey" }}>
                                    Temas
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "lightgrey" }}>
                                    Forum
                                </Typography>
                            </Box>
                            <Link to='/login' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{ color: "lightgrey" }}>
                                        logout
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}


export default Navbar;