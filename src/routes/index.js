const express = require('express');
const employees = require('./employeesRoute.js');

module.exports = app => {
    app.use(
        express.json(),
        employees,
    );
};