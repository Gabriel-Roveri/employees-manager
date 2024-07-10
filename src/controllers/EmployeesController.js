const Controller = require('./Controller.js');
const EmployeeServices = require('../services/EmployeeServices.js')

const employeeServices = new EmployeeServices();

class EmployeesController extends Controller{
    constructor(){
        super(employeeServices);
    }

    async getRecords(req, res) {
        
        const { employeeId } = req.params;

        try {
            const recordsList = await employeeServices.getRecordsByEmployee(Number(employeeId));
            return res.status(200).json(recordsList);
        } catch (error) {
            
        }
    }
}

module.exports = EmployeesController;