const jwt = require('jsonwebtoken');
const secretKey = 'shoco';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // Acess denied
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Proibido
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
