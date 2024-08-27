// n lembro como fiz mas eu utilizei mesma estrutura do bot de python va ler dps pra colocar no readme -shoco
import React, { useState } from 'react';

const ResourceForm = ({ onAddResource }) => {
  const [resource, setResource] = useState({ name: '', type: '', quantity: 0, description: '' });

  const handleChange = (e) => {
    setResource({ ...resource, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddResource(resource);
    setResource({ name: '', type: '', quantity: 0, description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Recurso:</label>
        <input type="text" name="name" value={resource.name} onChange={handleChange} />
      </div>
      <div>
        <label>Tipo:</label>
        <input type="text" name="type" value={resource.type} onChange={handleChange} />
      </div>
      <div>
        <label>Quantidade:</label>
        <input type="number" name="quantity" value={resource.quantity} onChange={handleChange} />
      </div>
      <div>
        <label>Descrição:</label>
        <textarea name="description" value={resource.description} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Adicionar Recurso</button>
    </form>
  );
};

export default ResourceForm;
