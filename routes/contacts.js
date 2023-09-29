const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/:id', contactsController.getSingle);
router.get('/', contactsController.getAll);
// router.use('/', require('./routes'));

module.exports = router;
