const { Router } = require('express');
const EmployeesController = require('../controllers/EmployeesController.js');

const employeesController = new EmployeesController();

const router = Router();

router
    .get('/employees', (req, res) => employeesController.getAll(req, res))
    .get('/employees/:id', (req, res) => employeesController.getById(req, res))
    .post('/employees', (req, res) => employeesController.newLog(req, res))
    .put('/employees:id', (req, res) => employeesController.update(req, res))
    .delete('/employees:id',  (req, res) => employeesController.del(req,res));

module.exports = router;