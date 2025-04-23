// rotas.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./assets/css/radionovela.css";
import Home from './pages/Home';
import Programas from './pages/Programas';



const Rotas = () => {
  return (
    <Router>
      <Routes>
        {/* Página inicial: Dashboard */}
        <Route path="/" element={<Home />} />
        <Route path="/programa/:slug/" element={<Programas />} />
      </Routes>
    </Router>
  );
};

export default Rotas;