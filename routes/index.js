const routes = require('express').Router();

const baseController = require('../controllers');

routes.get('/', baseController.getName);
routes.get('/test', baseController.getNameTwo);

module.exports = routes;