import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/controle-acesso">Controle de Acesso</Link></li>
        <li><Link to="/gerenciamento-recursos">Gerenciamento de Recursos</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
