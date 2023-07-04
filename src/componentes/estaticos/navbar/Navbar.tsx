import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

import { TokenState } from '../../../store/tokens/tokenReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });

        navigate('/login')

    }

    var navbarComponent;

    if (token != "") {

        navbarComponent = <AppBar position="static">
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
                        <Link to='/Tema'>
                            <Typography variant="h6" style={{ color: "lightgrey" }}>
                                Tema
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

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" style={{ color: "lightgrey" }}>
                            Logout
                        </Typography>
                    </Box>
                </Box>

            </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}


export default Navbar;