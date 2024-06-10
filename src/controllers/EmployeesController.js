const Controller = require('./Controller.js');
const EmployeeServices = require('../services/EmployeeServices.js')

const employeeServices = new EmployeeServices();

class EmployeesController extends Controller{
    constructor(){
        super(employeeServices);
    }
}

module.exports = EmployeesController;