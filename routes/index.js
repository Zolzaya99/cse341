const routes = require('express').Router();

const baseController = require('../controllers/contacts');

// routes.get('/', baseController.getName);
// routes.get('/test', baseController.getNameTwo);
routes.use('/contacts', require('./contacts'));

module.exports = routes;