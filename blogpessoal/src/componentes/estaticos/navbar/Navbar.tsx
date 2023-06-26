import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado!")
        Navigate("/login")
    }
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
                            <Link to='/Postagens'>
                                <Typography variant="h6" style={{ color: "lightgrey" }}>
                                    Postagens
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Link to='/Temas'>
                                <Typography variant="h6" style={{ color: "lightgrey" }}>
                                    Temas
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Link to='/formularioTema'>
                                <Typography variant="h6" style={{ color: "lightgrey" }}>
                                    Cadastrar tema
                                </Typography>
                            </Link>
                        </Box>

                            <Box mx={1} className='cursor' onClick = {goLogout}>
                                <Typography variant="h6" style={{ color: "lightgrey" }}>
                                    Logout
                                </Typography>
                            </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}


export default Navbar;