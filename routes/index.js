const routes = require('express').Router();

// const baseController = require('../controllers/contacts');

routes.use('/swagger', require('./swagger'))
routes.use('/contacts', require('./contacts'));

module.exports = routes;