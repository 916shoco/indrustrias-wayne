const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Role.associate = (models) => {
  Role.belongsToMany(models.User, { through: 'UserRoles' });
};

module.exports = Role;