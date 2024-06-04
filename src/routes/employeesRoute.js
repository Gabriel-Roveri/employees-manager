const { Router } = require('express');
const EmployeesController = require('../controllers/EmployeesController.js');

const employeeController = new EmployeesController();

const router = Router();

router.get('/employees',  (req, res) => EmployeesController.getAll(req,res));

module.exports = router;