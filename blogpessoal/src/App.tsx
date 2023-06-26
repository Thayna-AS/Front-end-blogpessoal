import './App.css';
import React from 'react';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Sobre from './paginas/sobre/Sobre';
import Temas from './paginas/temas/Temas';
import Forum from './paginas/forum/Forum';
import Postagens from './paginas/postagens/Postagens';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import CadastroPostagem from './componentes/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import ListaTema from './componentes/temas/listatema/ListaTema';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/temas" element={<Temas />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/login" element={<Login />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/postagens" element={<Postagens />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
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
    </BrowserRouter>
  );
}

export default App;