import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box, LinearProgress} from '@mui/material';
import './Postagens.css'
import { Link } from 'react-router-dom';

function Postagens() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f5cac3" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >

                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#432818", fontWeight: "bold" }}>aqui você poderá expressar suas opniões e o que pensa!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Link to='/ListaPostagem'>
                        <Button variant="outlined" style={{ borderColor: "lightgrey", backgroundColor: "#432818", color: "lightgrey" }}>Ver Postagens</Button>
                        </Link>
                    </Box>
                    
                </Grid>
                <Grid item xs={6} >
                    <img src="https://uploads-ssl.webflow.com/6399c61683700ed8ab159d36/639fb83a406f2fe5e0ad07ae_Base-imagem-destacada-blog.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Postagens;
