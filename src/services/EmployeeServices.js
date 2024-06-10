const Services = require('./Services.js');

class EmployeeServices extends Services {
    constructor() {
        super('Employee');
    }
}

module.exports = EmployeeServices;