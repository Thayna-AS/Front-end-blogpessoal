import React, { useState, useEffect, ChangeEvent } from 'react';
import './Login.css';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/Services';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';


function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(token != ''){
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const resposta = await api.post('/usuarios/logar', userLogin)
            setToken(resposta.data.token)

            alert('Usuario logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }

    }


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Junte-se a comunidade</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://www.primecursos.com.br/blog/wp-content/uploads/2020/05/Pantys_final_dialogos_v02.gif)`,
                backgroundRepeat: 'no-repeat', width: '80vh', minHeight: '89vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>

    );
}

export default Login;