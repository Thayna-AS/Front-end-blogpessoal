import React from 'react';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';


import ListaTema from './componentes/temas/listatema/ListaTema';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema'
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import CadastroPostagem from './componentes/postagens/cadastroPostagem/CadastroPostagem';







function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />

        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/cadastrousuario" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPostagem />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />

            <Route path="/formularioTema" element={<CadastroTema />} />

            <Route path="/formularioTema/:id" element={<CadastroTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />


          </Routes>
        </div>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;