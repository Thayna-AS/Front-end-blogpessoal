import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/footer';
import Home from './paginas/home/home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '65vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/postagens" element={<postagens />} />
          <Route path="/temas" element={<temas />} />
          <Route path="/cadastro de temas" element={<cadastrotemas />} />
    
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;