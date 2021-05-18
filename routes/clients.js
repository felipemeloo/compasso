const express = require('express');
const clientController = require('../controllers/ClientController');

const router = express.Router();

router.post('/create', clientController.saveClient);
router.get('/:id/:name', clientController.findByNameClient);
router.get('/:id', clientController.findBydIdClient);
router.put('/:id', clientController.updateClientName);
router.delete('/:id', clientController.deleteClient);

module.exports = router;