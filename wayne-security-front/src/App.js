import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ControleAcesso from './ControleAcesso';
import GerenciamentoRecursos from './GerenciamentoRecursos';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/controle-acesso" element={<ControleAcesso />} />
          <Route path="gerenciamento-recursos" element={<GerenciamentoRecursos />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
