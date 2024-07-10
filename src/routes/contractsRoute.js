const { Router } = require('express');
const ContractsController = require('../controllers/ContractsController.js');

const contractsController = new ContractsController();

const router = Router();

router.get('/contracts', (req, res) => contractsController.getAll(req, res))
router.get('/contracts/:id', (req, res) => contractsController.getById(req, res))
router.post('/contracts', (req, res) => contractsController.newLog(req, res))
router.put('/contracts:id', (req, res) => contractsController.update(req, res))
router.delete('/contracts:id',  (req, res) => contractsController.del(req,res));

module.exports = router;