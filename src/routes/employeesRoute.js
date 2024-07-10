const { Router } = require('express');
const EmployeesController = require('../controllers/EmployeesController.js');
const RecordsController = require('../controllers/RecordsController.js');

const employeesController = new EmployeesController();
const recordsController = new RecordsController();

const router = Router();


router.get('/employees', (req, res) => employeesController.getAll(req, res));
router.get('/employees/:id', (req, res) => employeesController.getById(req, res));
router.post('/employees', (req, res) => employeesController.newLog(req, res));
router.put('/employees/:id', (req, res) => employeesController.update(req, res));
router.delete('/employees/:id', (req, res) => employeesController.del(req, res));
router.get('/employees/:employeeId/records', (req, res) => employeesController.getRecords(req, res));
router.post('/employees/:employeeId/records', (req, res) => recordsController.newLog(req, res));

module.exports = router;