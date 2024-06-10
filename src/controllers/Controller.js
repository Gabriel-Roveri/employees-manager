class Controller {
    
    constructor(serviceEntity) {
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res) {
        try {
            const logsList = await this.serviceEntity.getAllLogs();
            return res.status(200).json(logsList);
        } catch (error) {
            
        }
    }
}

module.exports = Controller;