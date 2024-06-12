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

    async getById(req, res) {
       
        const { id } = req.params;
        try {
        
        const log = await this.serviceEntity.getLogById(Number(id));
        return res.status(200).json(log);
        } catch (error) {
        // error
        }
    }

    async newLog(req, res) {

        const createdData = req.body;
        
        try {
            
        const newCreatedLog = await this.serviceEntity.createLog(createdData);
        return res.status(200).json(newCreatedLog);
        } catch (error) {
        // error
        }
    }
    
    async update(req, res) {
        
        const { id } = req.params;
        const updatedData = req.body;

        try {
            
            const isUpdated = await this.serviceEntity.logUpdate(updatedData, Number(id));
            if (!isUpdated) {
                return res.status(400).json({ message: `Log did not update!` });
            }
            return res.status(200).json({ message: `Updated!` });
        } catch (error) {
            
        }

    }

    async del(req, res) {
         
        const { id } = req.params;

        try { 
             
            await this.serviceEntity.delLog(Number(id));
            return res.status(200).json({ message: `id ${id} deleted` });    
        } catch (error) {
            return res.status(500).json(error.message);
     }
    }
    
}

module.exports = Controller;