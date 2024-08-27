import React, { useState } from 'react';
import ResourceForm from '../components/ResourceForm';
import ResourceList from '../components/ResourceList';

const GerenciamentoRecursos = () => {
  const [resources, setResources] = useState([]);

  const addResource = (resource) => {
    setResources([...resources, resource]);
  };

  const deleteResource = (index) => {
    setResources(resources.filter((_, i) => i !== index));
  };

  const editResource = (index) => {
    // Adicione logica ao recurso aqui!!!!!!! (ou deixe vazio funciona tbm -_-)
  };

  return (
    <div>
      <h1>Gerenciamento de Recursos</h1>
      <ResourceForm onAddResource={addResource} />
      <ResourceList resources={resources} onDeleteResource={deleteResource} onEditResource={editResource} />
    </div>
  );
};

export default GerenciamentoRecursos;
