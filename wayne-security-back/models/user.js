const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Role = require('./roles');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: 'id',
    }
  }
});

User.belongsTo(Role, { foreignKey: 'roleId' });

module.exports = User;
