import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard de Segurança</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h2>Recursos Disponíveis</h2>
          <p>Veículos: 10</p>
          <p>Equipamentos: 50</p>
          <p>Dispositivos de Segurança: 30</p>
        </div>
        <div className="card">
          <h2>Atividades Recentes</h2>
          <p>Monitoramento: Ativo</p>
          <p>Acesso Negado: 5</p>
          <p>Alertas: 2</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
