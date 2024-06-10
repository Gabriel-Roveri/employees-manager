const { Router } = require('express');
const EmployeesController = require('../controllers/EmployeesController.js');

const employeesController = new EmployeesController();

const router = Router();

router.get('/employees',  (req, res) => employeesController.getAll(req,res));

module.exports = router;