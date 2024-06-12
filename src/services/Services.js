const dataSource = require('../models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllLogs() {
        return dataSource[this.model].findAll();
    }

    async getLogById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async createLog(logData) {
        return dataSource[this.model].create(logData);
    }
    
    async logUpdate(updatedData, id) {

        const updatedLogList = dataSource[this.model].update(updatedData, {
            where: { id: id }
        });

        if (updatedLogList[0] === 0) {
            return false;
        }
        
        return true;
    }

    async delLog(id) {
        return dataSource[this.model].destroy({ where: { id: id } });
    }
}

module.exports = Services;