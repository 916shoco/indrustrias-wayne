import React from 'react';

const ResourceList = ({ resources, onDeleteResource, onEditResource }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Quantidade</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {resources.map((resource, index) => (
          <tr key={index}>
            <td>{resource.name}</td>
            <td>{resource.type}</td>
            <td>{resource.quantity}</td>
            <td>{resource.description}</td>
            <td>
              <button onClick={() => onEditResource(index)}>Editar</button>
              <button onClick={() => onDeleteResource(index)}>Remover</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResourceList;
