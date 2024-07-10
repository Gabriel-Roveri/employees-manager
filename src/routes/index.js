const express = require('express');
const employees = require('./employeesRoute.js');
const contracts = require('./contractsRoute.js');
const departments = require('./departmentsRoute.js');

module.exports = app => {
    app.use(
        express.json(),
        employees,
        contracts,
        departments
        
    );
};