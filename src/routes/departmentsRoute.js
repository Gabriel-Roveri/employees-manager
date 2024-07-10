const { Router } = require('express');
const DepartmentsController = require('../controllers/DepartmentsController.js');

const departmentsController = new DepartmentsController();

const router = Router();

router.get('/departments', (req, res) => departmentsController.getAll(req, res))
router.get('/departments/:id', (req, res) => departmentsController.getById(req, res))
router.post('/departments', (req, res) => departmentsController.newLog(req, res))
router.put('/departments/:id', (req, res) => departmentsController.update(req, res))
router.delete('/departments/:id',  (req, res) => departmentsController.del(req,res));

module.exports = router;