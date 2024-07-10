const Controller = require('./Controller.js');
const DepartmentServices = require('../services/DepartmentServices.js')

const departmentServices = new DepartmentServices();

class DepartmentsController extends Controller{
    constructor(){
        super(departmentServices);
    }
}

module.exports = DepartmentsController;