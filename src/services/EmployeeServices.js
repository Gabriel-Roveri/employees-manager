const Services = require('./Services.js');

class EmployeeServices extends Services {
    constructor() {
        super('Employee');
    }

    async getRecordsByEmployee(id) {
        const employee = await super.getLogById(id);
        const recordsList = await employee.getRecordsEmployee();
        return recordsList;
    }
}

module.exports = EmployeeServices;