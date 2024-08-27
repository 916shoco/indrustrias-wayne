const Role = require('../models/roles');

const authorizeRole = (requiredRole) => {
  return async (req, res, next) => {
    try {
      const userRole = await Role.findByPk(req.user.roleId);

      if (userRole && userRole.name === requiredRole) {
        return next();
      } else {
        return res.status(403).json({ message: 'Access forbidden: insufficient permissions' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error verifying role', error });
    }
  };
};

module.exports = authorizeRole;
