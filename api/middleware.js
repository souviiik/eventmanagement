'use-strict'

const jwt = require('jsonwebtoken');
const config = require('./utils/util').getConfig();

const withAuth = function (req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;

  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, config.JWT.SECRET, function (err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.id = decoded.id;
        next();
      }
    });
  }
}

module.exports = withAuth;