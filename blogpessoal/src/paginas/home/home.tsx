import React, {useEffect} from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Link } from 'react-router-dom';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';

function Home() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f5cac3" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#432818", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#432818", fontWeight: "bold" }}>aqui você poderá expressar suas opniões e o que pensa!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "lightgrey", backgroundColor: "#432818", color: "lightgrey" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://uploads-ssl.webflow.com/6399c61683700ed8ab159d36/639fb83a406f2fe5e0ad07ae_Base-imagem-destacada-blog.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;