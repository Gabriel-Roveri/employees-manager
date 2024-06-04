const database = require('../models');

class EmployeesController {
    static async getAll(req, res) {
        try { 
            const employeesList = await database.Employees.findall();
            return res.status(200).json(employeesList);
        } catch(error) {
            
        }
    }
     
}

module.exports = EmployeesController;