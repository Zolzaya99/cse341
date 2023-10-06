const routes = require('express').Router();

// const baseController = require('../controllers/contacts');

routes.use('/', require('./swagger'))
routes.use('/contacts', require('./contacts'));

module.exports = routes;